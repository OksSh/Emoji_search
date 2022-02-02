interface IProps {
  symbol: string;
  title: string;
}

export const EmojiRow = ({ symbol, title }: IProps) => {
  return (
    <div style={{ display: 'flex' }}>
      <p>{symbol}</p>
      <p>{title}</p>
    </div>
  );
};
