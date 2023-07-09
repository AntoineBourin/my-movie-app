import { defaultLocale } from "@/utils/i18n";
import { useParams } from "next/navigation";

export const useCurrentLanguage = () => {
  const params = useParams();

  return params.locale || defaultLocale;
};
