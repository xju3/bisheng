import { FileIcon } from "@/components/bs-icons/file";
import { Button } from "@/components/bs-ui/button";
import { QuestionTooltip } from "@/components/bs-ui/tooltip";
import { uploadFileApi } from "@/controllers/API";
import { cn } from "@/util/utils";
import { CheckCircle2Icon, RefreshCw, RotateCw, XCircle } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { Progress, ProgressStatus } from ".";

export default function ProgressItem({ analysis = false, item, onResulte, onDelete }: {
    analysis: boolean,
    item: Progress,
    onResulte?: (id: string, res: any) => void
    onDelete?: (id: string) => void
}) {
    const [progress, setProgress] = useState(analysis ? 100 : 0)
    const [retrying, setRetrying] = useState(false)
    const abortControllerRef = useRef(null)

    const uploadApi = async (item) => {
        // 如果已有未完成的请求，先取消
        if (abortControllerRef.current) {
            abortControllerRef.current.abort();
        }
        uploadFileApi({
            fileKey: 'file',
            file: item.file,
            onProgress: (progress) => {
                setProgress(progress)
            },
            onFinish: (res) => {
                console.log('上传结果 :>> ', res);
                setProgress(100)
                onResulte(item.id, {
                    id: item.id,
                    fileName: item.fileName,
                    file_path: res.file_path,
                })
                setRetrying(false)
            },
            onFail: (err) => {
                setProgress(100)
                onResulte(item.id, {
                    id: item.id,
                    fileName: item.fileName,
                    file_path: '',
                })
                setRetrying(false)
            },
            onAbort: (abort) => {
                abortControllerRef.current = abort
            }
        })
    }

    useEffect(() => {
        if (item.progress === ProgressStatus.Uploading) {
            console.log('开始上传 :>> ', item.id);
            uploadApi(item)
        }
    }, [item.progress])

    const extension = useMemo(() => {
        return item.fileName.split('.').pop() || 'txt';
    }, [item.fileName])

    const handleCancel = () => {
        if (abortControllerRef.current) {
            console.log('取消上传 :>> ', item.id);
            abortControllerRef.current.abort();
        }
        onDelete(item.id)
    }

    const analysisStatusIcon = (item) => {
        if (!analysis) return
        if (item.progress === ProgressStatus.Await) {
            return <RotateCw size={18} className=" text-primary animate-spin" />
        } else if (item.reason) {
            return <QuestionTooltip error content={item.reason} />
        } else {
            return <CheckCircle2Icon size={18} className=" text-primary" />
        }
    }

    return (
        <div className={cn(
            "border border-primary/20 rounded-xl cursor-pointer hover:border-primary/80 hover:shadow-lg relative overflow-hidden",
            // { "border-[#A8A8A8]/40": item.error && !retrying },
            { "border-red-500": item.reason }
        )}>
            <div className={cn(
                "absolute h-full",
                {
                    "bg-[#A8A8A8]/20": item.error && !retrying,
                    "bg-primary/20": (!item.error || retrying) && progress !== 100,
                    "animate-pulse": progress !== 100 && !item.error,
                    "bg-red-500/10": item.reason
                }
            )} style={{ width: `${progress}%` }}></div>
            <div className="group flex gap-2 p-2 items-center relative z-10">
                <FileIcon type={extension} className="size-[30px]" />
                <div className="progress-item__title">
                    <span className="progress-item__title__name">{item.fileName}</span>
                </div>
                <div className="ml-auto flex opacity-0 group-hover:opacity-100">
                    {item.error && !analysis &&
                        <Button
                            size="icon"
                            className="size-8"
                            variant="ghost"
                            onClick={() => {
                                uploadApi(item);
                                setRetrying(true);
                            }}
                        ><RefreshCw size={16} /></Button>
                    }
                    {onDelete && <Button
                        size="icon"
                        className="size-8"
                        variant="ghost"
                        onClick={handleCancel}
                    ><XCircle size={16} /></Button>}
                </div>
                {analysisStatusIcon(item)}
            </div>
        </div>
    )
};
