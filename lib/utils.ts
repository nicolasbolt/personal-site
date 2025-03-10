import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Function to generate consistent tag colors
export const getTagColorClass = (tag) => {
  // Map of tag categories to color classes
  const tagColorMap = {
    'productivity': 'bg-blue-100 text-blue-800',
    'goals': 'bg-emerald-100 text-emerald-800',
    'planning': 'bg-purple-100 text-purple-800',
    'personal-development': 'bg-amber-100 text-amber-800',
    'project-management': 'bg-sky-100 text-sky-800',
    'software': 'bg-slate-100 text-slate-800',
    'marketing': 'bg-rose-100 text-rose-800',
    'sales': 'bg-orange-100 text-orange-800',
    'outreach': 'bg-pink-100 text-pink-800',
    'business': 'bg-indigo-100 text-indigo-800',
    'content': 'bg-teal-100 text-teal-800',
    'language-learning': 'bg-cyan-100 text-cyan-800',
    'education': 'bg-lime-100 text-lime-800',
  };

  // Return the color class for the tag, or a default if not found
  return tagColorMap[tag] || 'bg-gray-100 text-gray-800';
};
