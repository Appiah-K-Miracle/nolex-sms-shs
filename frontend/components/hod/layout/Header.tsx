interface HeaderProps {
  title: string;
  subtitle: string;
  actionButton?: React.ReactNode;
}

export default function Header({ title, subtitle, actionButton }: HeaderProps) {
  return (
    <header className="flex items-center justify-between w-full px-6 py-4 bg-white border-b border-gray-200">
      <div className="flex flex-col min-w-0">
        <span className="text-4xl font-bold text-gray-900 truncate">{title}</span>
        <span className="text-green-700 text-sm font-medium">{subtitle}</span>
      </div>
      {actionButton && (
        <div className="flex-shrink-0">
          {actionButton}
        </div>
      )}
    </header>
  );
}


