export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      agent_memory: {
        Row: {
          agent_team: string
          content: string
          created_at: string | null
          embedding: string | null
          id: string
          memory_type: string
          relevance_score: number | null
          source_ids: string[] | null
          updated_at: string | null
        }
        Insert: {
          agent_team: string
          content: string
          created_at?: string | null
          embedding?: string | null
          id?: string
          memory_type: string
          relevance_score?: number | null
          source_ids?: string[] | null
          updated_at?: string | null
        }
        Update: {
          agent_team?: string
          content?: string
          created_at?: string | null
          embedding?: string | null
          id?: string
          memory_type?: string
          relevance_score?: number | null
          source_ids?: string[] | null
          updated_at?: string | null
        }
        Relationships: []
      }
      community_comments: {
        Row: {
          author_id: string | null
          comment_id: string
          content: string | null
          created_at: string | null
          engagement: Json | null
          id: string
          parent_comment_id: string | null
          platform: string
          post_id: string | null
          scraped_at: string | null
        }
        Insert: {
          author_id?: string | null
          comment_id: string
          content?: string | null
          created_at?: string | null
          engagement?: Json | null
          id?: string
          parent_comment_id?: string | null
          platform: string
          post_id?: string | null
          scraped_at?: string | null
        }
        Update: {
          author_id?: string | null
          comment_id?: string
          content?: string | null
          created_at?: string | null
          engagement?: Json | null
          id?: string
          parent_comment_id?: string | null
          platform?: string
          post_id?: string | null
          scraped_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "community_comments_post_id_fkey"
            columns: ["post_id"]
            isOneToOne: false
            referencedRelation: "community_posts"
            referencedColumns: ["id"]
          },
        ]
      }
      community_posts: {
        Row: {
          author_id: string | null
          content: string | null
          created_at: string | null
          engagement: Json | null
          group_id: string
          id: string
          metadata: Json | null
          platform: string
          post_id: string
          post_url: string | null
          scraped_at: string | null
        }
        Insert: {
          author_id?: string | null
          content?: string | null
          created_at?: string | null
          engagement?: Json | null
          group_id: string
          id?: string
          metadata?: Json | null
          platform: string
          post_id: string
          post_url?: string | null
          scraped_at?: string | null
        }
        Update: {
          author_id?: string | null
          content?: string | null
          created_at?: string | null
          engagement?: Json | null
          group_id?: string
          id?: string
          metadata?: Json | null
          platform?: string
          post_id?: string
          post_url?: string | null
          scraped_at?: string | null
        }
        Relationships: []
      }
      entities: {
        Row: {
          first_seen_at: string | null
          id: string
          last_seen_at: string | null
          mention_count: number | null
          metadata: Json | null
          name: string
          sentiment: number | null
          source_ids: string[] | null
          source_type: string
          type: string
        }
        Insert: {
          first_seen_at?: string | null
          id?: string
          last_seen_at?: string | null
          mention_count?: number | null
          metadata?: Json | null
          name: string
          sentiment?: number | null
          source_ids?: string[] | null
          source_type: string
          type: string
        }
        Update: {
          first_seen_at?: string | null
          id?: string
          last_seen_at?: string | null
          mention_count?: number | null
          metadata?: Json | null
          name?: string
          sentiment?: number | null
          source_ids?: string[] | null
          source_type?: string
          type?: string
        }
        Relationships: []
      }
      entity_mentions: {
        Row: {
          context: string | null
          created_at: string | null
          entity_id: string | null
          id: string
          sentiment: number | null
          source_id: string
          source_type: string
        }
        Insert: {
          context?: string | null
          created_at?: string | null
          entity_id?: string | null
          id?: string
          sentiment?: number | null
          source_id: string
          source_type: string
        }
        Update: {
          context?: string | null
          created_at?: string | null
          entity_id?: string | null
          id?: string
          sentiment?: number | null
          source_id?: string
          source_type?: string
        }
        Relationships: [
          {
            foreignKeyName: "entity_mentions_entity_id_fkey"
            columns: ["entity_id"]
            isOneToOne: false
            referencedRelation: "entities"
            referencedColumns: ["id"]
          },
        ]
      }
      optimization_tasks: {
        Row: {
          completed_at: string | null
          created_at: string | null
          error_message: string | null
          id: string
          optimization_notes: string | null
          optimized_content: string | null
          original_content: string
          platform: string | null
          processing_started_at: string | null
          status: string
          task_type: string
          updated_at: string | null
          user_id: string | null
        }
        Insert: {
          completed_at?: string | null
          created_at?: string | null
          error_message?: string | null
          id?: string
          optimization_notes?: string | null
          optimized_content?: string | null
          original_content: string
          platform?: string | null
          processing_started_at?: string | null
          status?: string
          task_type: string
          updated_at?: string | null
          user_id?: string | null
        }
        Update: {
          completed_at?: string | null
          created_at?: string | null
          error_message?: string | null
          id?: string
          optimization_notes?: string | null
          optimized_content?: string | null
          original_content?: string
          platform?: string | null
          processing_started_at?: string | null
          status?: string
          task_type?: string
          updated_at?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      stl_metadata: {
        Row: {
          categories: string[] | null
          created_at: string | null
          creator_id: string | null
          description: string | null
          download_count: number | null
          id: string
          like_count: number | null
          metadata: Json | null
          model_id: string
          platform: string
          price: number | null
          scraped_at: string | null
          tags: string[] | null
          title: string | null
          url: string
        }
        Insert: {
          categories?: string[] | null
          created_at?: string | null
          creator_id?: string | null
          description?: string | null
          download_count?: number | null
          id?: string
          like_count?: number | null
          metadata?: Json | null
          model_id: string
          platform: string
          price?: number | null
          scraped_at?: string | null
          tags?: string[] | null
          title?: string | null
          url: string
        }
        Update: {
          categories?: string[] | null
          created_at?: string | null
          creator_id?: string | null
          description?: string | null
          download_count?: number | null
          id?: string
          like_count?: number | null
          metadata?: Json | null
          model_id?: string
          platform?: string
          price?: number | null
          scraped_at?: string | null
          tags?: string[] | null
          title?: string | null
          url?: string
        }
        Relationships: []
      }
      videos: {
        Row: {
          author_id: string | null
          created_at: string | null
          description: string | null
          engagement: Json | null
          id: string
          metadata: Json | null
          platform: string
          scraped_at: string | null
          title: string | null
          transcript: string | null
          url: string
          video_id: string
        }
        Insert: {
          author_id?: string | null
          created_at?: string | null
          description?: string | null
          engagement?: Json | null
          id?: string
          metadata?: Json | null
          platform: string
          scraped_at?: string | null
          title?: string | null
          transcript?: string | null
          url: string
          video_id: string
        }
        Update: {
          author_id?: string | null
          created_at?: string | null
          description?: string | null
          engagement?: Json | null
          id?: string
          metadata?: Json | null
          platform?: string
          scraped_at?: string | null
          title?: string | null
          transcript?: string | null
          url?: string
          video_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      binary_quantize: {
        Args: { "": string } | { "": unknown }
        Returns: unknown
      }
      halfvec_avg: {
        Args: { "": number[] }
        Returns: unknown
      }
      halfvec_out: {
        Args: { "": unknown }
        Returns: unknown
      }
      halfvec_send: {
        Args: { "": unknown }
        Returns: string
      }
      halfvec_typmod_in: {
        Args: { "": unknown[] }
        Returns: number
      }
      hnsw_bit_support: {
        Args: { "": unknown }
        Returns: unknown
      }
      hnsw_halfvec_support: {
        Args: { "": unknown }
        Returns: unknown
      }
      hnsw_sparsevec_support: {
        Args: { "": unknown }
        Returns: unknown
      }
      hnswhandler: {
        Args: { "": unknown }
        Returns: unknown
      }
      ivfflat_bit_support: {
        Args: { "": unknown }
        Returns: unknown
      }
      ivfflat_halfvec_support: {
        Args: { "": unknown }
        Returns: unknown
      }
      ivfflathandler: {
        Args: { "": unknown }
        Returns: unknown
      }
      l2_norm: {
        Args: { "": unknown } | { "": unknown }
        Returns: number
      }
      l2_normalize: {
        Args: { "": string } | { "": unknown } | { "": unknown }
        Returns: string
      }
      sparsevec_out: {
        Args: { "": unknown }
        Returns: unknown
      }
      sparsevec_send: {
        Args: { "": unknown }
        Returns: string
      }
      sparsevec_typmod_in: {
        Args: { "": unknown[] }
        Returns: number
      }
      vector_avg: {
        Args: { "": number[] }
        Returns: string
      }
      vector_dims: {
        Args: { "": string } | { "": unknown }
        Returns: number
      }
      vector_norm: {
        Args: { "": string }
        Returns: number
      }
      vector_out: {
        Args: { "": string }
        Returns: unknown
      }
      vector_send: {
        Args: { "": string }
        Returns: string
      }
      vector_typmod_in: {
        Args: { "": unknown[] }
        Returns: number
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
