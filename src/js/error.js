import { error } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';


export default function onFetchError() {
    error({
      title: false,
      text: 'Too many matches found. Please enter a more specific query!=)',
      shadow: true,
      delay: 2000,
    });
  }