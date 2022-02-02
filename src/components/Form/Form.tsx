import { useState, ChangeEvent } from 'react';

interface IProps {
  getEmojiesList: (text: string) => void;
}

export const Form = ({ getEmojiesList }: IProps) => {
  const [text, setText] = useState<string>('');

  const handleSearchEmoji = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
    getEmojiesList(text);
  };

  return <input value={text} onChange={handleSearchEmoji} />;
};
