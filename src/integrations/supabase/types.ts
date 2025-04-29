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
          user_id: string | null
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
          user_id?: string | null
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
          user_id?: string | null
        }
        Relationships: []
      }
      blog_posts: {
        Row: {
          content: string
          created_at: string
          description: string | null
          id: string
          publish_date: string | null
          published: boolean | null
          title: string
          updated_at: string
        }
        Insert: {
          content: string
          created_at?: string
          description?: string | null
          id?: string
          publish_date?: string | null
          published?: boolean | null
          title: string
          updated_at?: string
        }
        Update: {
          content?: string
          created_at?: string
          description?: string | null
          id?: string
          publish_date?: string | null
          published?: boolean | null
          title?: string
          updated_at?: string
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
          user_id: string | null
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
          user_id?: string | null
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
          user_id?: string | null
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
          user_id: string | null
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
          user_id?: string | null
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
          user_id?: string | null
        }
        Relationships: []
      }
      configuration_notes: {
        Row: {
          created_at: string | null
          id: number
          issue: string
          needs_manual_action: boolean | null
          recommendation: string
        }
        Insert: {
          created_at?: string | null
          id?: number
          issue: string
          needs_manual_action?: boolean | null
          recommendation: string
        }
        Update: {
          created_at?: string | null
          id?: number
          issue?: string
          needs_manual_action?: boolean | null
          recommendation?: string
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
          user_id: string | null
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
          user_id?: string | null
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
          user_id?: string | null
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
          user_id: string | null
        }
        Insert: {
          context?: string | null
          created_at?: string | null
          entity_id?: string | null
          id?: string
          sentiment?: number | null
          source_id: string
          source_type: string
          user_id?: string | null
        }
        Update: {
          context?: string | null
          created_at?: string | null
          entity_id?: string | null
          id?: string
          sentiment?: number | null
          source_id?: string
          source_type?: string
          user_id?: string | null
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
      grant_application_attachments: {
        Row: {
          application_id: string
          file_name: string
          file_type: string
          file_url: string
          id: string
          uploaded_at: string
        }
        Insert: {
          application_id: string
          file_name: string
          file_type: string
          file_url: string
          id?: string
          uploaded_at?: string
        }
        Update: {
          application_id?: string
          file_name?: string
          file_type?: string
          file_url?: string
          id?: string
          uploaded_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "grant_application_attachments_application_id_fkey"
            columns: ["application_id"]
            isOneToOne: false
            referencedRelation: "grant_applications"
            referencedColumns: ["id"]
          },
        ]
      }
      grant_applications: {
        Row: {
          budget_breakdown: Json
          created_at: string
          funding_amount_requested: number
          id: string
          implementation_plan: string
          innovation_aspect: string
          location: string
          organization_name: string | null
          problem_statement: string
          project_category: string
          project_summary: string
          project_timeline: number
          project_title: string
          proposed_solution: string
          status: Database["public"]["Enums"]["grant_application_status"] | null
          submitted_at: string | null
          sustainability_impact: string
          team_size: number | null
          updated_at: string
          user_id: string
          website_url: string | null
        }
        Insert: {
          budget_breakdown: Json
          created_at?: string
          funding_amount_requested: number
          id?: string
          implementation_plan: string
          innovation_aspect: string
          location: string
          organization_name?: string | null
          problem_statement: string
          project_category: string
          project_summary: string
          project_timeline: number
          project_title: string
          proposed_solution: string
          status?:
            | Database["public"]["Enums"]["grant_application_status"]
            | null
          submitted_at?: string | null
          sustainability_impact: string
          team_size?: number | null
          updated_at?: string
          user_id: string
          website_url?: string | null
        }
        Update: {
          budget_breakdown?: Json
          created_at?: string
          funding_amount_requested?: number
          id?: string
          implementation_plan?: string
          innovation_aspect?: string
          location?: string
          organization_name?: string | null
          problem_statement?: string
          project_category?: string
          project_summary?: string
          project_timeline?: number
          project_title?: string
          proposed_solution?: string
          status?:
            | Database["public"]["Enums"]["grant_application_status"]
            | null
          submitted_at?: string | null
          sustainability_impact?: string
          team_size?: number | null
          updated_at?: string
          user_id?: string
          website_url?: string | null
        }
        Relationships: []
      }
      newsletters: {
        Row: {
          content: string
          created_at: string
          description: string | null
          id: string
          publish_date: string | null
          published: boolean | null
          title: string
          updated_at: string
        }
        Insert: {
          content: string
          created_at?: string
          description?: string | null
          id?: string
          publish_date?: string | null
          published?: boolean | null
          title: string
          updated_at?: string
        }
        Update: {
          content?: string
          created_at?: string
          description?: string | null
          id?: string
          publish_date?: string | null
          published?: boolean | null
          title?: string
          updated_at?: string
        }
        Relationships: []
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
      profiles: {
        Row: {
          avatar_url: string | null
          business_website: string | null
          created_at: string | null
          full_name: string | null
          id: string
          instagram_handle: string | null
          updated_at: string | null
        }
        Insert: {
          avatar_url?: string | null
          business_website?: string | null
          created_at?: string | null
          full_name?: string | null
          id: string
          instagram_handle?: string | null
          updated_at?: string | null
        }
        Update: {
          avatar_url?: string | null
          business_website?: string | null
          created_at?: string | null
          full_name?: string | null
          id?: string
          instagram_handle?: string | null
          updated_at?: string | null
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
          user_id: string | null
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
          user_id?: string | null
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
          user_id?: string | null
        }
        Relationships: []
      }
      subscribers: {
        Row: {
          created_at: string
          email: string
          id: string
          stripe_customer_id: string | null
          subscribed: boolean
          subscription_end: string | null
          subscription_tier: string | null
          updated_at: string
          user_id: string | null
        }
        Insert: {
          created_at?: string
          email: string
          id?: string
          stripe_customer_id?: string | null
          subscribed?: boolean
          subscription_end?: string | null
          subscription_tier?: string | null
          updated_at?: string
          user_id?: string | null
        }
        Update: {
          created_at?: string
          email?: string
          id?: string
          stripe_customer_id?: string | null
          subscribed?: boolean
          subscription_end?: string | null
          subscription_tier?: string | null
          updated_at?: string
          user_id?: string | null
        }
        Relationships: []
      }
      user_chapter_responses: {
        Row: {
          chapter_number: number
          completed_at: string | null
          created_at: string | null
          id: string
          response_data: Json
          section_id: string
          updated_at: string | null
          user_id: string
        }
        Insert: {
          chapter_number: number
          completed_at?: string | null
          created_at?: string | null
          id?: string
          response_data?: Json
          section_id: string
          updated_at?: string | null
          user_id: string
        }
        Update: {
          chapter_number?: number
          completed_at?: string | null
          created_at?: string | null
          id?: string
          response_data?: Json
          section_id?: string
          updated_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
      user_roles: {
        Row: {
          created_at: string | null
          id: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          created_at?: string | null
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
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
          user_id: string | null
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
          user_id?: string | null
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
          user_id?: string | null
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
      has_role: {
        Args: { user_id: string; role: Database["public"]["Enums"]["app_role"] }
        Returns: boolean
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
      app_role: "admin" | "moderator" | "user"
      grant_application_status:
        | "draft"
        | "submitted"
        | "under_review"
        | "approved"
        | "rejected"
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
    Enums: {
      app_role: ["admin", "moderator", "user"],
      grant_application_status: [
        "draft",
        "submitted",
        "under_review",
        "approved",
        "rejected",
      ],
    },
  },
} as const
