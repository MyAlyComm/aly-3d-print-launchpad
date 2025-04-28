
export interface WorkflowItem {
  id: number;
  name: string;
  description?: string;
  category: string;
  icon?: React.ReactNode;
  path: string;
  isNew?: boolean;
  lastUsed?: string;
}

export interface CategoryWorkflows {
  [key: string]: {
    name: string;
    path: string;
    isNew?: boolean;
  }[];
}
