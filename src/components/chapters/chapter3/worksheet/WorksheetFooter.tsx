
interface WorksheetFooterProps {
  children?: React.ReactNode;
}

export const WorksheetFooter = ({ children }: WorksheetFooterProps) => {
  return (
    <div className="mt-6 text-center text-sm text-muted-foreground">
      <p>
        Complete this self-assessment before moving to the next chapter. In Chapter 4, we'll dive deeper into 
        finding your first three winning products, with specific selection frameworks based on your Decision 
        Tree path and detailed case studies across different niches and markets.
      </p>
      {children}
    </div>
  );
};
