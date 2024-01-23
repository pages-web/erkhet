import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const DesignSystem = () => {
  const colors = [
    'bg-ring',
    'bg-foreground',
    'bg-primary',
    'bg-border',
    'bg-input',
    'bg-secondary',
    'bg-destructive',

    'bg-muted',
    'bg-primary-foreground',
    'bg-secondary-foreground',
    'bg-destructive-foreground',
    'bg-background',
    'bg-muted-foreground',
    'bg-accent',
    'bg-accent-foreground',
    'bg-popover',
    'bg-popover-foreground',
    'bg-card',
    'bg-card-foreground',
  ];
  return (
    <div className="flex flex-wrap flex-col h-screen items-center justify-center max-w-4xl mx-auto">
      <div className="bg-ring"></div>

      <Button>ddd</Button>
      <div className="text-2xl font-bold w-full pb-6">Colors</div>
      <div className="grid gap-6 grid-cols-8">
        {colors.map((c) => (
          <div key={c} className="space-y-3">
            <div className={cn('h-20 w-20 rounded-2xl shadow-lg', c)}></div>
            <div className="text-xs text-slate-400">{c.replace('bg-', '')}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DesignSystem;
