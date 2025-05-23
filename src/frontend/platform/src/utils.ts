import clsx, { ClassValue } from "clsx";
import cloneDeep from "lodash-es/cloneDeep";
import {
  Compass,
  Cpu,
  FileInput,
  FileSearch,
  Fingerprint,
  Gift,
  Hammer,
  HelpCircle,
  Laptop2,
  Layers,
  Lightbulb,
  Link,
  MessageCircle,
  Paperclip,
  Rocket,
  Scissors,
  TerminalSquare,
  Wand2,
  Wrench,
  LayoutPanelLeft,
  Box
} from "lucide-react";
import { ComponentType, SVGProps } from "react";
import { Connection, Edge, Node, ReactFlowInstance } from '@xyflow/react';
import { twMerge } from "tailwind-merge";
import { ADJECTIVES, DESCRIPTIONS, NOUNS } from "./flow_constants";
import { AirbyteIcon } from "./icons/Airbyte";
import { AnthropicIcon } from "./icons/Anthropic";
import { BingIcon } from "./icons/Bing";
import { ChromaIcon } from "./icons/ChromaIcon";
import { CohereIcon } from "./icons/Cohere";
import { EvernoteIcon } from "./icons/Evernote";
import { FBIcon } from "./icons/FacebookMessenger";
import { GitBookIcon } from "./icons/GitBook";
import { GoogleIcon } from "./icons/Google";
import { HuggingFaceIcon } from "./icons/HuggingFace";
import { IFixIcon } from "./icons/IFixIt";
import { MetaIcon } from "./icons/Meta";
import { MidjourneyIcon } from "./icons/Midjorney";
import { MongoDBIcon } from "./icons/MongoDB";
import { NotionIcon } from "./icons/Notion";
import { OpenAiIcon } from "./icons/OpenAi";
import { PineconeIcon } from "./icons/Pinecone";
import { QDrantIcon } from "./icons/QDrant";
import { SearxIcon } from "./icons/Searx";
import { SlackIcon } from "./icons/Slack";
import { VertexAIIcon } from "./icons/VertexAI";
import { HackerNewsIcon } from "./icons/hackerNews";
import { SupabaseIcon } from "./icons/supabase";
import {
  APIDataType,
  APITemplateType,
  TemplateVariableType
} from "./types/api";
import {
  IVarHighlightType,
  groupedObjType,
  nodeGroupedObjType,
  tweakType
} from "./types/components";
import { FlowType, NodeType } from "./types/flow";
import i18next from "i18next";

export function classNames(...classes: Array<string>) {
  return classes.filter(Boolean).join(" ");
}

export const limitScrollFieldsModal = 10;

export enum TypeModal {
  TEXT = 1,
  PROMPT = 2,
}

export const textColors = {
  white: "text-white",
  red: "text-red-700",
  orange: "text-orange-700",
  amber: "text-amber-700",
  yellow: "text-yellow-700",
  lime: "text-lime-700",
  green: "text-green-700",
  emerald: "text-emerald-700",
  teal: "text-teal-700",
  cyan: "text-cyan-700",
  sky: "text-sky-700",
  blue: "text-blue-700",
  indigo: "text-indigo-700",
  violet: "text-violet-700",
  purple: "text-purple-700",
  fuchsia: "text-fuchsia-700",
  pink: "text-pink-700",
  rose: "text-rose-700",
  black: "text-black-700",
  gray: "text-gray-700",
};

export const borderLColors = {
  white: "border-l-white",
  red: "border-l-red-500",
  orange: "border-l-orange-500",
  amber: "border-l-amber-500",
  yellow: "border-l-yellow-500",
  lime: "border-l-lime-500",
  green: "border-l-green-500",
  emerald: "border-l-emerald-500",
  teal: "border-l-teal-500",
  cyan: "border-l-cyan-500",
  sky: "border-l-sky-500",
  blue: "border-l-blue-500",
  indigo: "border-l-indigo-500",
  violet: "border-l-violet-500",
  purple: "border-l-purple-500",
  fuchsia: "border-l-fuchsia-500",
  pink: "border-l-pink-500",
  rose: "border-l-rose-500",
  black: "border-l-black-500",
  gray: "border-l-gray-500",
};

export const nodeColors: { [char: string]: string } = {
  prompts: "#4367BF",
  llms: "#6344BE",
  chains: "#FE7500",
  agents: "#903BBE",
  tools: "#FF3434",
  memories: "#F5B85A",
  advanced: "#000000",
  chat: "#198BF6",
  thought: "#272541",
  embeddings: "#42BAA7",
  documentloaders: "#7AAE42",
  vectorstores: "#AA8742",
  textsplitters: "#B47CB5",
  toolkits: "#DB2C2C",
  wrappers: "#E6277A",
  utilities: "#31A3CC",
  output_parsers: "#E6A627",
  str: "#049524",
  retrievers: "#e6b25a",
  input_output: "#0ea5e9",
  autogen_roles: '#6366f1',
  unknown: "#9CA3AF",
  custom_components: "#ab11ab",
};

const nodeNames: { [char: string]: string } = {
  prompts: "提示词/Prompts",
  llms: "语言模型/LLMs",
  chains: "工作链/Chains",
  agents: "代理/Agents",
  tools: "工具/Tools",
  memories: "记忆器/Memories",
  advanced: "Advanced",
  chat: "Chat",
  embeddings: "嵌入器/Embeddings",
  documentloaders: "装载器/Loaders",
  vectorstores: "向量存储/VectorStores",
  toolkits: "工具箱/Toolkits",
  wrappers: "Wrappers",
  textsplitters: "文本分割/TextSplitters",
  retrievers: "检索器/Retrievers",
  input_output: "输入输出/inputOutput",
  utilities: "通用工具/Utilities",
  output_parsers: "输出解析器/OutputParsers",
  autogen_roles: '多智能体角色/AutogenRole',
  custom_components: "自定义/Custom",
  unknown: "Unknown",
};

const nodeEnNames: { [char: string]: string } = {
  prompts: "Prompts",
  llms: "LLMs",
  chains: "Chains",
  agents: "Agents",
  tools: "Tools",
  memories: "Memories",
  advanced: "Advanced",
  chat: "Chat",
  embeddings: "Embeddings",
  documentloaders: "Loaders",
  vectorstores: "VectorStores",
  toolkits: "Toolkits",
  wrappers: "Wrappers",
  textsplitters: "TextSplitters",
  retrievers: "Retrievers",
  input_output: "input/output",
  utilities: "Utilities",
  output_parsers: "OutputParsers",
  autogen_roles: 'AutogenRole',
  custom_components: "Custom",
  unknown: "Unknown",
};

export function getNodeNames() {
  return i18next.language === 'en' ? nodeEnNames : nodeNames
}

export const nodeIconsLucide: {
  [char: string]: React.ForwardRefExoticComponent<
    ComponentType<SVGProps<SVGSVGElement>>
  >;
} = {
  Chroma: ChromaIcon as React.ForwardRefExoticComponent<
    ComponentType<SVGProps<SVGSVGElement>>
  >,
  AirbyteJSONLoader: AirbyteIcon as React.ForwardRefExoticComponent<
    ComponentType<SVGProps<SVGSVGElement>>
  >,
  Anthropic: AnthropicIcon as React.ForwardRefExoticComponent<
    ComponentType<SVGProps<SVGSVGElement>>
  >,
  ChatAnthropic: AnthropicIcon as React.ForwardRefExoticComponent<
    ComponentType<SVGProps<SVGSVGElement>>
  >,
  BingSearchAPIWrapper: BingIcon as React.ForwardRefExoticComponent<
    ComponentType<SVGProps<SVGSVGElement>>
  >,
  BingSearchRun: BingIcon as React.ForwardRefExoticComponent<
    ComponentType<SVGProps<SVGSVGElement>>
  >,
  Cohere: CohereIcon as React.ForwardRefExoticComponent<
    ComponentType<SVGProps<SVGSVGElement>>
  >,
  CohereEmbeddings: CohereIcon as React.ForwardRefExoticComponent<
    ComponentType<SVGProps<SVGSVGElement>>
  >,
  EverNoteLoader: EvernoteIcon as React.ForwardRefExoticComponent<
    ComponentType<SVGProps<SVGSVGElement>>
  >,
  FacebookChatLoader: FBIcon as React.ForwardRefExoticComponent<
    ComponentType<SVGProps<SVGSVGElement>>
  >,
  GitbookLoader: GitBookIcon as React.ForwardRefExoticComponent<
    ComponentType<SVGProps<SVGSVGElement>>
  >,
  GoogleSearchAPIWrapper: GoogleIcon as React.ForwardRefExoticComponent<
    ComponentType<SVGProps<SVGSVGElement>>
  >,
  GoogleSearchResults: GoogleIcon as React.ForwardRefExoticComponent<
    ComponentType<SVGProps<SVGSVGElement>>
  >,
  GoogleSearchRun: GoogleIcon as React.ForwardRefExoticComponent<
    ComponentType<SVGProps<SVGSVGElement>>
  >,
  HNLoader: HackerNewsIcon as React.ForwardRefExoticComponent<
    ComponentType<SVGProps<SVGSVGElement>>
  >,
  HuggingFaceHub: HuggingFaceIcon as React.ForwardRefExoticComponent<
    ComponentType<SVGProps<SVGSVGElement>>
  >,
  HuggingFaceEmbeddings: HuggingFaceIcon as React.ForwardRefExoticComponent<
    ComponentType<SVGProps<SVGSVGElement>>
  >,
  IFixitLoader: IFixIcon as React.ForwardRefExoticComponent<
    ComponentType<SVGProps<SVGSVGElement>>
  >,
  Meta: MetaIcon as React.ForwardRefExoticComponent<
    ComponentType<SVGProps<SVGSVGElement>>
  >,
  Midjorney: MidjourneyIcon as React.ForwardRefExoticComponent<
    ComponentType<SVGProps<SVGSVGElement>>
  >,
  MongoDBAtlasVectorSearch: MongoDBIcon as React.ForwardRefExoticComponent<
    ComponentType<SVGProps<SVGSVGElement>>
  >,
  NotionDirectoryLoader: NotionIcon as React.ForwardRefExoticComponent<
    ComponentType<SVGProps<SVGSVGElement>>
  >,
  ChatOpenAI: OpenAiIcon as React.ForwardRefExoticComponent<
    ComponentType<SVGProps<SVGSVGElement>>
  >,
  OpenAI: OpenAiIcon as React.ForwardRefExoticComponent<
    ComponentType<SVGProps<SVGSVGElement>>
  >,
  OpenAIEmbeddings: OpenAiIcon as React.ForwardRefExoticComponent<
    ComponentType<SVGProps<SVGSVGElement>>
  >,
  Pinecone: PineconeIcon as React.ForwardRefExoticComponent<
    ComponentType<SVGProps<SVGSVGElement>>
  >,
  Qdrant: QDrantIcon as React.ForwardRefExoticComponent<
    ComponentType<SVGProps<SVGSVGElement>>
  >,
  Searx: SearxIcon as React.ForwardRefExoticComponent<
    ComponentType<SVGProps<SVGSVGElement>>
  >,
  SlackDirectoryLoader: SlackIcon as React.ForwardRefExoticComponent<
    ComponentType<SVGProps<SVGSVGElement>>
  >,
  SupabaseVectorStore: SupabaseIcon as React.ForwardRefExoticComponent<
    ComponentType<SVGProps<SVGSVGElement>>
  >,
  VertexAI: VertexAIIcon as React.ForwardRefExoticComponent<
    ComponentType<SVGProps<SVGSVGElement>>
  >,
  ChatVertexAI: VertexAIIcon as React.ForwardRefExoticComponent<
    ComponentType<SVGProps<SVGSVGElement>>
  >,
  agents: Rocket as React.ForwardRefExoticComponent<
    ComponentType<SVGProps<SVGSVGElement>>
  >,
  chains: Link as React.ForwardRefExoticComponent<
    ComponentType<SVGProps<SVGSVGElement>>
  >,
  memories: Cpu as React.ForwardRefExoticComponent<
    ComponentType<SVGProps<SVGSVGElement>>
  >,
  llms: Lightbulb as React.ForwardRefExoticComponent<
    ComponentType<SVGProps<SVGSVGElement>>
  >,
  prompts: TerminalSquare as React.ForwardRefExoticComponent<
    ComponentType<SVGProps<SVGSVGElement>>
  >,
  tools: Wrench as React.ForwardRefExoticComponent<
    ComponentType<SVGProps<SVGSVGElement>>
  >,
  advanced: Laptop2 as React.ForwardRefExoticComponent<
    ComponentType<SVGProps<SVGSVGElement>>
  >,
  chat: MessageCircle as React.ForwardRefExoticComponent<
    ComponentType<SVGProps<SVGSVGElement>>
  >,
  embeddings: Fingerprint as React.ForwardRefExoticComponent<
    ComponentType<SVGProps<SVGSVGElement>>
  >,
  documentloaders: Paperclip as React.ForwardRefExoticComponent<
    ComponentType<SVGProps<SVGSVGElement>>
  >,
  vectorstores: Layers as React.ForwardRefExoticComponent<
    ComponentType<SVGProps<SVGSVGElement>>
  >,
  toolkits: Hammer as React.ForwardRefExoticComponent<
    ComponentType<SVGProps<SVGSVGElement>>
  >,
  textsplitters: Scissors as React.ForwardRefExoticComponent<
    ComponentType<SVGProps<SVGSVGElement>>
  >,
  wrappers: Gift as React.ForwardRefExoticComponent<
    ComponentType<SVGProps<SVGSVGElement>>
  >,
  utilities: Wand2 as React.ForwardRefExoticComponent<
    ComponentType<SVGProps<SVGSVGElement>>
  >,
  output_parsers: Compass as React.ForwardRefExoticComponent<
    ComponentType<SVGProps<SVGSVGElement>>
  >,
  retrievers: FileSearch as React.ForwardRefExoticComponent<
    ComponentType<SVGProps<SVGSVGElement>>
  >,
  unknown: HelpCircle as React.ForwardRefExoticComponent<
    ComponentType<SVGProps<SVGSVGElement>>
  >,
  input_output: FileInput,
  // output: FileOutput,
  autogen_roles: LayoutPanelLeft,
  custom_components: Box
};

export const gradients = [
  "bg-gradient-to-br from-gray-800 via-rose-700 to-violet-900",
  "bg-gradient-to-br from-green-200 via-green-300 to-blue-500",
  "bg-gradient-to-br from-yellow-200 via-yellow-400 to-yellow-700",
  "bg-gradient-to-br from-green-200 via-green-400 to-purple-700",
  "bg-gradient-to-br from-blue-100 via-blue-300 to-blue-500",
  "bg-gradient-to-br from-purple-400 to-yellow-400",
  "bg-gradient-to-br from-red-800 via-yellow-600 to-yellow-500",
  "bg-gradient-to-br from-blue-300 via-green-200 to-yellow-300",
  "bg-gradient-to-br from-blue-700 via-blue-800 to-gray-900",
  "bg-gradient-to-br from-green-300 to-purple-400",
  "bg-gradient-to-br from-yellow-200 via-pink-200 to-pink-400",
  "bg-gradient-to-br from-green-500 to-green-700",
  "bg-gradient-to-br from-rose-400 via-fuchsia-500 to-indigo-500",
  "bg-gradient-to-br from-sky-400 to-blue-500",
  "bg-gradient-to-br from-green-200 via-green-400 to-green-500",
  "bg-gradient-to-br from-red-400 via-gray-300 to-blue-500",
  "bg-gradient-to-br from-gray-900 to-gray-600 bg-gradient-to-r",
  "bg-gradient-to-br from-rose-500 via-red-400 to-red-500",
  "bg-gradient-to-br from-fuchsia-600 to-pink-600",
  "bg-gradient-to-br from-emerald-500 to-lime-600",
  "bg-gradient-to-br from-rose-500 to-indigo-700",
  "bg-gradient-to-br bg-gradient-to-tr from-violet-500 to-orange-300",
  "bg-gradient-to-br from-gray-900 via-purple-900 to-violet-600",
  "bg-gradient-to-br from-yellow-200 via-red-500 to-fuchsia-500",
  "bg-gradient-to-br from-sky-400 to-indigo-900",
  "bg-gradient-to-br from-amber-200 via-violet-600 to-sky-900",
  "bg-gradient-to-br from-amber-700 via-orange-300 to-rose-800",
  "bg-gradient-to-br from-gray-300 via-fuchsia-600 to-orange-600",
  "bg-gradient-to-br from-fuchsia-500 via-red-600 to-orange-400",
  "bg-gradient-to-br from-sky-400 via-rose-400 to-lime-400",
  "bg-gradient-to-br from-lime-600 via-yellow-300 to-red-600",
];

export const bgColors = {
  white: "bg-white",
  red: "bg-red-100",
  orange: "bg-orange-100",
  amber: "bg-amber-100",
  yellow: "bg-yellow-100",
  lime: "bg-lime-100",
  green: "bg-green-100",
  emerald: "bg-emerald-100",
  teal: "bg-teal-100",
  cyan: "bg-cyan-100",
  sky: "bg-sky-100",
  blue: "bg-blue-100",
  indigo: "bg-indigo-100",
  violet: "bg-violet-100",
  purple: "bg-purple-100",
  fuchsia: "bg-fuchsia-100",
  pink: "bg-pink-100",
  rose: "bg-rose-100",
  black: "bg-black-100",
  gray: "bg-gray-100",
};

export const bgColorsHover = {
  white: "hover:bg-white",
  black: "hover:bg-black-50",
  gray: "hover:bg-gray-50",
  red: "hover:bg-red-50",
  orange: "hover:bg-orange-50",
  amber: "hover:bg-amber-50",
  yellow: "hover:bg-yellow-50",
  lime: "hover:bg-lime-50",
  green: "hover:bg-green-50",
  emerald: "hover:bg-emerald-50",
  teal: "hover:bg-teal-50",
  cyan: "hover:bg-cyan-50",
  sky: "hover:bg-sky-50",
  blue: "hover:bg-blue-50",
  indigo: "hover:bg-indigo-50",
  violet: "hover:bg-violet-50",
  purple: "hover:bg-purple-50",
  fuchsia: "hover:bg-fuchsia-50",
  pink: "hover:bg-pink-50",
  rose: "hover:bg-rose-50",
};

export const textColorsHex = {
  red: "rgb(185 28 28)",
  orange: "rgb(194 65 12)",
  amber: "rgb(180 83 9)",
  yellow: "rgb(161 98 7)",
  lime: "rgb(77 124 15)",
  green: "rgb(21 128 61)",
  emerald: "rgb(4 120 87)",
  teal: "rgb(15 118 110)",
  cyan: "rgb(14 116 144)",
  sky: "rgb(3 105 161)",
  blue: "rgb(29 78 216)",
  indigo: "rgb(67 56 202)",
  violet: "rgb(109 40 217)",
  purple: "rgb(126 34 206)",
  fuchsia: "rgb(162 28 175)",
  pink: "rgb(190 24 93)",
  rose: "rgb(190 18 60)",
};

export const bgColorsHex = {
  red: "rgb(254 226 226)",
  orange: "rgb(255 237 213)",
  amber: "rgb(254 243 199)",
  yellow: "rgb(254 249 195)",
  lime: "rgb(236 252 203)",
  green: "rgb(220 252 231)",
  emerald: "rgb(209 250 229)",
  teal: "rgb(204 251 241)",
  cyan: "rgb(207 250 254)",
  sky: "rgb(224 242 254)",
  blue: "rgb(219 234 254)",
  indigo: "rgb(224 231 255)",
  violet: "rgb(237 233 254)",
  purple: "rgb(243 232 255)",
  fuchsia: "rgb(250 232 255)",
  pink: "rgb(252 231 243)",
  rose: "rgb(255 228 230)",
};

export const taskTypeMap: { [key: string]: string } = {
  MULTICLASS_CLASSIFICATION: "Multiclass Classification",
};

const charWidths: { [char: string]: number } = {
  " ": 0.2,
  "!": 0.2,
  '"': 0.3,
  "#": 0.5,
  $: 0.5,
  "%": 0.5,
  "&": 0.5,
  "(": 0.2,
  ")": 0.2,
  "*": 0.5,
  "+": 0.5,
  ",": 0.2,
  "-": 0.2,
  ".": 0.1,
  "/": 0.5,
  ":": 0.2,
  ";": 0.2,
  "<": 0.5,
  "=": 0.5,
  ">": 0.5,
  "?": 0.2,
  "@": 0.5,
  "[": 0.2,
  "\\": 0.5,
  "]": 0.2,
  "^": 0.5,
  _: 0.2,
  "`": 0.5,
  "{": 0.2,
  "|": 0.2,
  "}": 0.2,
  "~": 0.5,
};

for (let i = 65; i <= 90; i++) {
  charWidths[String.fromCharCode(i)] = 0.6;
}
for (let i = 97; i <= 122; i++) {
  charWidths[String.fromCharCode(i)] = 0.5;
}

export function measureTextWidth(text: string, fontSize: number) {
  let wordWidth = 0;
  for (let j = 0; j < text.length; j++) {
    let char = text[j];
    let charWidth = charWidths[char] || 0.5;
    wordWidth += charWidth * fontSize;
  }
  return wordWidth;
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function measureTextHeight(
  text: string,
  width: number,
  fontSize: number
) {
  const charHeight = fontSize;
  const lineHeight = charHeight * 1.5;
  const words = text.split(" ");
  let lineWidth = 0;
  let totalHeight = 0;
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    let wordWidth = measureTextWidth(word, fontSize);
    if (lineWidth + wordWidth + charWidths[" "] * fontSize <= width) {
      lineWidth += wordWidth + charWidths[" "] * fontSize;
    } else {
      totalHeight += lineHeight;
      lineWidth = wordWidth;
    }
  }
  totalHeight += lineHeight;
  return totalHeight;
}

export function toCamelCase(str: string) {
  return str
    .split(" ")
    .map((word, index) =>
      index === 0
        ? word.toLowerCase()
        : word[0].toUpperCase() + word.slice(1).toLowerCase()
    )
    .join("");
}
export function toFirstUpperCase(str: string) {
  return str
    .split(" ")
    .map((word, index) => word[0].toUpperCase() + word.slice(1).toLowerCase())
    .join("");
}

export function snakeToSpaces(str: string) {
  return str.split("_").join(" ");
}

export function toNormalCase(str: string) {
  let result = str
    .split("_")
    .map((word, index) => {
      if (index === 0) {
        return word[0].toUpperCase() + word.slice(1).toLowerCase();
      }
      return word.toLowerCase();
    })
    .join(" ");

  return result
    .split("-")
    .map((word, index) => {
      if (index === 0) {
        return word[0].toUpperCase() + word.slice(1).toLowerCase();
      }
      return word.toLowerCase();
    })
    .join(" ");
}

export function normalCaseToSnakeCase(str: string) {
  return str
    .split(" ")
    .map((word, index) => {
      if (index === 0) {
        return word[0].toUpperCase() + word.slice(1).toLowerCase();
      }
      return word.toLowerCase();
    })
    .join("_");
}

export function roundNumber(x: number, decimals: number) {
  return Math.round(x * Math.pow(10, decimals)) / Math.pow(10, decimals);
}

export function getConnectedNodes(edge: Edge, nodes: Array<Node>): Array<Node> {
  const sourceId = edge.source;
  const targetId = edge.target;
  return nodes.filter((node) => node.id === targetId || node.id === sourceId);
}

// 控制节点链接的验证，false 不可连
export function isValidConnection(
  { source, target, sourceHandle, targetHandle }: Connection,
  reactFlowInstance: ReactFlowInstance
) {
  if (
    targetHandle
      .split("|")[0]
      .split(";")
      .some((n) => n === sourceHandle.split("|")[0]) ||
    sourceHandle
      .split("|")
      .slice(2)
      .some((t) =>
        targetHandle
          .split("|")[0]
          .split(";")
          .some((n) => n === t)
      ) ||
    targetHandle.split("|")[0] === "str"
  ) {
    let targetNode = reactFlowInstance?.getNode(target)?.data?.node;
    if (!targetNode) {
      if (
        !reactFlowInstance
          .getEdges()
          .find((e) => e.targetHandle === targetHandle)
      ) {
        return true;
      }
    } else if (
      (!targetNode.template[targetHandle.split("|")[1]].list &&
        !reactFlowInstance
          .getEdges()
          .find((e) => e.targetHandle === targetHandle)) ||
      targetNode.template[targetHandle.split("|")[1]].list
    ) {
      return true;
    }
  }
  return false;
}

export function removeApiKeys(flow: FlowType): FlowType {
  let cleanFLow = cloneDeep(flow);
  cleanFLow.data.nodes.forEach((node) => {
    for (const key in node.data.node.template) {
      if (node.data.node.template[key].password) {
        node.data.node.template[key].value = "";
      }
    }
  });
  return cleanFLow;
}

export function updateObject<T extends Record<string, any>>(
  reference: T,
  objectToUpdate: T
): T {
  let clonedObject = cloneDeep(objectToUpdate);
  // Loop through each key in the object to update
  for (const key in clonedObject) {
    // If the key is not in the reference object, delete it
    if (!(key in reference)) {
      delete clonedObject[key];
    }
  }
  // Loop through each key in the reference object
  for (const key in reference) {
    // If the key is not in the object to update, add it
    if (!(key in clonedObject)) {
      clonedObject[key] = reference[key];
    }
  }
  return clonedObject;
}

export function debounce(func, wait) {
  let timeout;
  return function (...args) {
    const context = this;
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(context, args), wait);
  };
}

// 从模板中复制template
export function updateTemplate(
  reference: APITemplateType,
  objectToUpdate: APITemplateType
): APITemplateType {
  let clonedObject: APITemplateType = cloneDeep(reference); // temp clone

  // Loop through each key in the reference object
  for (const tmpkey in clonedObject) {
    if (!objectToUpdate[tmpkey]) continue // 没有的 key直接使用template对象
    // If the tmpkey is not in the object to update, add it
    if (objectToUpdate[tmpkey] && (objectToUpdate[tmpkey].value || objectToUpdate[tmpkey].type === 'bool')) {
      clonedObject[tmpkey].value = objectToUpdate[tmpkey].value;
    }
    if (
      objectToUpdate[tmpkey] &&
      objectToUpdate[tmpkey].advanced !== null &&
      objectToUpdate[tmpkey].advanced !== undefined
    ) {
      clonedObject[tmpkey].advanced = objectToUpdate[tmpkey].advanced;
    }

    // file_path的文件类型不覆盖
    if (tmpkey === 'file_path') {
      clonedObject[tmpkey].fileTypes = objectToUpdate[tmpkey].fileTypes
      clonedObject[tmpkey].suffixes = objectToUpdate[tmpkey].suffixes
    }
    if (objectToUpdate[tmpkey].hasOwnProperty('required')) {
      clonedObject[tmpkey].required = objectToUpdate[tmpkey].required
    }
    if (objectToUpdate[tmpkey].hasOwnProperty('show')) {
      clonedObject[tmpkey].show = objectToUpdate[tmpkey].show
    }
    if (objectToUpdate[tmpkey].hasOwnProperty('l2')) {
      clonedObject[tmpkey].l2 = objectToUpdate[tmpkey].l2
      clonedObject[tmpkey].l2_name = objectToUpdate[tmpkey].l2_name
    }
    if (objectToUpdate[tmpkey].hasOwnProperty('collection_id')) {
      clonedObject[tmpkey].collection_id = objectToUpdate[tmpkey].collection_id
    }
  }
  return clonedObject;
}

interface languageMap {
  [key: string]: string | undefined;
}

export const programmingLanguages: languageMap = {
  javascript: ".js",
  python: ".py",
  java: ".java",
  c: ".c",
  cpp: ".cpp",
  "c++": ".cpp",
  "c#": ".cs",
  ruby: ".rb",
  php: ".php",
  swift: ".swift",
  "objective-c": ".m",
  kotlin: ".kt",
  typescript: ".ts",
  go: ".go",
  perl: ".pl",
  rust: ".rs",
  scala: ".scala",
  haskell: ".hs",
  lua: ".lua",
  shell: ".sh",
  sql: ".sql",
  html: ".html",
  css: ".css",
  // add more file extensions here, make sure the key is same as language prop in CodeBlock.tsx component
};

export function toTitleCase(str: string) {
  let result = str
    .split("_")
    .map((word, index) => {
      if (index === 0) {
        return checkUpperWords(
          word[0].toUpperCase() + word.slice(1).toLowerCase()
        );
      }
      return checkUpperWords(word.toLowerCase());
    })
    .join(" ");

  return result
    .split("-")
    .map((word, index) => {
      if (index === 0) {
        return checkUpperWords(
          word[0].toUpperCase() + word.slice(1).toLowerCase()
        );
      }
      return checkUpperWords(word.toLowerCase());
    })
    .join(" ");
}

export const upperCaseWords: string[] = ["llm", "uri"];
export function checkUpperWords(str: string) {
  const words = str.split(" ").map((word) => {
    return upperCaseWords.includes(word.toLowerCase())
      ? word.toUpperCase()
      : word[0].toUpperCase() + word.slice(1).toLowerCase();
  });

  return words.join(" ");
}

export function updateIds(newFlow, getNodeId) {
  let idsMap = {};

  newFlow.nodes.forEach((n: NodeType) => {
    // Generate a unique node ID
    let newId = getNodeId(n.data.type);
    idsMap[n.id] = newId;
    n.id = newId;
    n.data.id = newId;
    // Add the new node to the list of nodes in state
  });

  newFlow.edges.forEach((e) => {
    e.source = idsMap[e.source];
    e.target = idsMap[e.target];
    let sourceHandleSplitted = e.sourceHandle.split("|");
    e.sourceHandle =
      sourceHandleSplitted[0] +
      "|" +
      e.source +
      "|" +
      sourceHandleSplitted.slice(2).join("|");
    let targetHandleSplitted = e.targetHandle.split("|");
    e.targetHandle =
      targetHandleSplitted.slice(0, -1).join("|") + "|" + e.target;
    e.id =
      "reactflow__edge-" +
      e.source +
      e.sourceHandle +
      "-" +
      e.target +
      e.targetHandle;
  });
}

export function groupByFamily(
  data: any,
  baseClasses: string,
  left: boolean,
  flow?: NodeType[]
): groupedObjType[] {
  const baseClassesSet = new Set(baseClasses.split("\n"));
  let arrOfPossibleInputs: Array<{
    category: string;
    nodes: nodeGroupedObjType[];
    full: boolean;
    display_name?: string;
  }> = [];
  let arrOfPossibleOutputs: Array<{
    category: string;
    nodes: nodeGroupedObjType[];
    full: boolean;
    display_name?: string;
  }> = [];
  let checkedNodes = new Map();
  const excludeTypes = new Set([
    "str",
    "bool",
    "float",
    "code",
    "prompt",
    "file",
    "int",
  ]);

  const checkBaseClass = (template: TemplateVariableType) => {
    return (
      template.type &&
      template.show &&
      ((!excludeTypes.has(template.type) &&
        baseClassesSet.has(template.type)) ||
        (template.input_types &&
          template.input_types.some((inputType) =>
            baseClassesSet.has(inputType)
          )))
    );
  };

  if (flow) {
    // se existir o flow
    for (const node of flow) {
      // para cada node do flow
      if (node!.data!.node!.flow) break; // não faz nada se o node for um group
      const nodeData = node.data;

      const foundNode = checkedNodes.get(nodeData.type); // verifica se o tipo do node já foi checado
      checkedNodes.set(nodeData.type, {
        hasBaseClassInTemplate:
          foundNode?.hasBaseClassInTemplate ||
          Object.values(nodeData.node!.template).some(checkBaseClass),
        hasBaseClassInBaseClasses:
          foundNode?.hasBaseClassInBaseClasses ||
          nodeData.node!.base_classes.some((baseClass) =>
            baseClassesSet.has(baseClass)
          ), //seta como anterior ou verifica se o node tem base class
        displayName: nodeData.node?.display_name,
      });
    }
  }

  for (const [d, nodes] of Object.entries(data)) {
    let tempInputs: nodeGroupedObjType[] = [],
      tempOutputs: nodeGroupedObjType[] = [];

    for (const [n, node] of Object.entries(nodes!)) {
      let foundNode = checkedNodes.get(n);

      if (!foundNode) {
        foundNode = {
          hasBaseClassInTemplate: Object.values(node!.template).some(
            checkBaseClass
          ),
          hasBaseClassInBaseClasses: node!.base_classes.some((baseClass) =>
            baseClassesSet.has(baseClass)
          ),
          displayName: node?.display_name,
        };
      }

      if (foundNode.hasBaseClassInTemplate)
        tempInputs.push({ node: n, displayName: foundNode.displayName });
      if (foundNode.hasBaseClassInBaseClasses)
        tempOutputs.push({ node: n, displayName: foundNode.displayName });
    }

    const totalNodes = Object.keys(nodes!).length;

    if (tempInputs.length)
      arrOfPossibleInputs.push({
        category: d,
        nodes: tempInputs,
        full: tempInputs.length === totalNodes,
      });
    if (tempOutputs.length)
      arrOfPossibleOutputs.push({
        category: d,
        nodes: tempOutputs,
        full: tempOutputs.length === totalNodes,
      });
  }

  return left
    ? arrOfPossibleOutputs.map((output) => ({
      family: output.category,
      type: output.full
        ? ""
        : output.nodes.map((item) => item.node).join(", "),
      display_name: "",
    }))
    : arrOfPossibleInputs.map((input) => ({
      family: input.category,
      type: input.full ? "" : input.nodes.map((item) => item.node).join(", "),
      display_name: input.nodes.map((item) => item.displayName).join(", "),
    }));
}

export function buildInputs(tabsState, id) {
  if (tabsState &&
    tabsState[id] &&
    tabsState[id].formKeysData &&
    tabsState[id].formKeysData.input_keys && tabsState[id].formKeysData.input_keys.length) {
    const input = tabsState[id].formKeysData.input_keys.find(el => el.type !== 'file')
    return JSON.stringify(input)
  }
  return '{"input": "message"}'
  // Object.keys(tabsState[id].formKeysData.input_keys).length > 0
  // ? JSON.stringify(tabsState[id].formKeysData.input_keys)
  // : '{"input": "message"}';
}

export function buildTweaks(flow) {
  if (!flow.data) return {}
  return flow.data.nodes.reduce((acc, node) => {
    acc[node.data.id] = {};
    return acc;
  }, {});
}
export function validateNode(
  n: NodeType,
  reactFlowInstance: ReactFlowInstance | any[]
): Array<string> {
  if (!n.data?.node?.template || !Object.keys(n.data.node.template)) {
    return [
      "我们注意到流程中的一个节点可能存在问题。请查看该问题，如有必要，请提交一份错误报告，并附上您导出的流程文件。感谢您的帮助！",
    ];
  }

  const {
    type,
    node: { template },
  } = n.data;
  return Object.keys(template).reduce(
    (errors: Array<string>, t) => {
      // 选择知识库不校验 embbadding
      if (t === "embedding" &&
        (template['collection_name']?.value ||
          template['index_name']?.value)) {
        return []
      }
      // （必填 && 显示 && 值为空 && 无连线） 即验证不通过
      return errors.concat(
        template[t].required &&
          template[t].show &&
          (template[t].value === undefined ||
            template[t].value === null ||
            template[t].value === "") &&
          !(reactFlowInstance?.getEdges?.() || reactFlowInstance).some(
            (e) =>
              e.targetHandle.split("|")[1] === t &&
              e.targetHandle.split("|")[2] === n.id
          )
          ? [
            `${type} ${i18next.language === 'en' ? 'lost' : '缺少参数'} ${template.display_name || toTitleCase(template[t].name)}.`,
          ]
          : []
      )
    }, [] as string[]
  );
}

// 校验技能节点有效性
export function validateNodes(reactFlowInstance: ReactFlowInstance) {
  if (reactFlowInstance.getNodes().length === 0) {
    return [
      "流程中未发现节点。请在流程中至少添加一个节点。",
    ];
  }
  return reactFlowInstance
    .getNodes()
    .flatMap((n: NodeType) => validateNode(n, reactFlowInstance));
}

export function getRandomElement<T>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)];
}
export function getRandomDescription(): string {
  return getRandomElement(DESCRIPTIONS);
}

export function getRandomName(
  retry: number = 0,
  noSpace: boolean = false,
  maxRetries: number = 3
): string {
  const left: string[] = ADJECTIVES;
  const right: string[] = NOUNS;

  const lv = getRandomElement(left);
  const rv = getRandomElement(right);

  // Condition to avoid "boring wozniak"
  if (lv === "boring" && rv === "wozniak") {
    if (retry < maxRetries) {
      return getRandomName(retry + 1, noSpace, maxRetries);
    } else {
      console.warn("Max retries reached, returning as is");
    }
  }

  // Append a suffix if retrying and noSpace is true
  if (retry > 0 && noSpace) {
    const retrySuffix = Math.floor(Math.random() * 10);
    return `${lv}_${rv}${retrySuffix}`;
  }

  // Construct the final name
  let final_name = noSpace ? `${lv}_${rv}` : `${lv} ${rv}`;
  // Return title case final name
  return toTitleCase(final_name);
}

export function getRandomKeyByssmm(): string {
  const now = new Date();
  const seconds = String(now.getSeconds()).padStart(2, "0");
  const milliseconds = String(now.getMilliseconds()).padStart(3, "0");
  return seconds + milliseconds + Math.abs(Math.floor(Math.random() * 10001));
}

export const INVALID_CHARACTERS = [
  " ",
  ",",
  ".",
  ":",
  ";",
  "!",
  "?",
  "/",
  "\\",
  "(",
  ")",
  "[",
  "]",
  "\n",
];

export const regexHighlight = /\{([^}]+)\}/g;

export const varHighlightHTML = ({ name }: IVarHighlightType) => {
  const html = `<span class="font-semibold chat-message-highlight">{${name}}</span>`;
  return html;
};


export const generateUUID = (length: number) => {
  let d = new Date().getTime()
  const uuid = ''.padStart(length, 'x').replace(/[xy]/g, (c) => {
    const r = (d + Math.random() * 16) % 16 | 0
    d = Math.floor(d / 16)
    return (c == 'x' ? r : (r & 0x7 | 0x8)).toString(16)
  })
  return uuid
}

const copyTextInDom = (dom) => {
  const range = document.createRange();

  range.selectNode(dom);
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(range);

  return new Promise((res) => {
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
    res(dom.innerText);
  })
}

// 复制到剪切板
export const copyText = (text: string | HTMLElement) => {
  // 复制 dom 内文本
  if (typeof text !== 'string') return copyTextInDom(text)
  // 高级 API直接复制文本（需要 https 环境）
  if (navigator.clipboard && navigator.clipboard.writeText) {
    return navigator.clipboard.writeText(text)
  }
  // 通过把文本写入 dom, 间接通过选中 dom 复制文本
  const areaDom = document.createElement("textarea");
  // 设置样式使其不在屏幕上显示
  areaDom.style.position = 'absolute';
  areaDom.style.left = '-9999px';
  areaDom.value = text;
  document.body.appendChild(areaDom);

  return copyTextInDom(areaDom).then((str) => {
    document.body.removeChild(areaDom);
  })
};
