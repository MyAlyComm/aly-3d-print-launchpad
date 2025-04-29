
-- Create a database function to delete a user account
CREATE OR REPLACE FUNCTION public.delete_user()
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  -- Delete the user from auth.users (will cascade to public.profiles and other related tables)
  DELETE FROM auth.users
  WHERE id = auth.uid();
END;
$$;
