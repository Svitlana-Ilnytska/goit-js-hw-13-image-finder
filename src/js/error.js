import { error } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';


export default function onFetchError() {
    error({
      title: false,
      text: 'Вибачте, нічого не знайдено за цією назвою ¯\_(ツ)_/¯',
      shadow: true,
      delay: 2000,
    });
  }