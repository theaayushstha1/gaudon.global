import React from 'react';
import { Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useLanguage } from './LanguageContext';

const languages = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'zh', name: '中文', flag: '🇨🇳' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'ar', name: 'العربية', flag: '🇸🇦' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' }
];

export default function LanguageSwitcher({ isScrolled }) {
  const { language, setLanguage } = useLanguage();

  const currentLanguage = languages.find(l => l.code === language);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="ghost" 
          size="sm"
          className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all duration-300 hover:scale-105 border-2 ${
            isScrolled 
              ? 'text-slate-800 hover:text-gray-600 hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-100 border-slate-200 hover:border-gray-400' 
              : 'text-white hover:text-white border-white/30 hover:bg-white/20 hover:border-white/60 backdrop-blur-sm'
          }`}
        >
          <div className="flex items-center gap-2">
            <span className="text-2xl">{currentLanguage?.flag}</span>
            <span className="hidden sm:inline font-semibold">{currentLanguage?.name}</span>
          </div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56 p-2 bg-white/95 backdrop-blur-xl border-2 border-slate-200 shadow-2xl">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => setLanguage(lang.code)}
            className={`cursor-pointer p-3 rounded-lg transition-all duration-200 ${
              language === lang.code 
                ? 'bg-gradient-to-r from-gray-100 to-gray-200 border-l-4 border-gray-500 scale-105' 
                : 'hover:bg-gradient-to-r hover:from-slate-50 hover:to-slate-100 hover:scale-105'
            }`}
          >
            <span className="text-3xl mr-3">{lang.flag}</span>
            <span className="font-semibold text-base">{lang.name}</span>
            {language === lang.code && (
              <span className="ml-auto text-gray-600 font-bold text-lg">✓</span>
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}