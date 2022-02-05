import { EmojiRow } from '../EmojiRow/EmojiRow';
import { emojies } from '../EmojiContainer/emojiList';
import styles from '../EmojiContainer/EmojiContainer.module.css';
import { Form } from '../Form/Form';
import { useState } from 'react';

interface IEmoji {
  title: string;
  symbol: string;
}

export const EmojiContainer = () => {
  const [newEmojies, setNewEmojies] = useState<IEmoji[]>(emojies);

  const getEmojiesList = (text: string) => {
    if (text) {
      const emojiesList: IEmoji[] = [...emojies].filter((item: IEmoji) => {
        return item.title.includes(text.toLowerCase());
      });
      setNewEmojies(emojiesList);
    } else {
      const emojiesList: IEmoji[] = emojies;
      setNewEmojies(emojies);
    }
  };

  return (
    <div className={styles.emojiContainer}>
      <Form getEmojiesList={getEmojiesList} />
      {newEmojies.map((item: IEmoji) => {
        return <EmojiRow symbol={item.symbol} title={item.title} />;
      })}
    </div>
  );
};
