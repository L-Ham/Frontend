import './subredditsidebar.css';

export const subredditSidebarClasses ={
    sidebarContainer: `subreddit-sidebar 
    s:block min-[768px]:sticky h-screen
    min-[768px]:top-[56px] min-[768px]:max-h-[calc(100vh-var(--shreddit-header-height)-1px)]
    min-[768px]:overflow-y-auto min-[768px]:overflow-x-hidden
    hidden
    w-[316px] min-w-[316px]`,
    sidebarAside: 'hidden rounded-[8px] bg-[var(--color-neutral-background-weak)] min-[768px]:block',
    sidebarDiv: 'pb-4',
};

