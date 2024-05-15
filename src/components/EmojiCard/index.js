import './index.css'

const EmojiCard = prop => {
  const {emojiData, emojiOnClick} = prop
  const {emojiUrl, emojiName, id} = emojiData
  return (
    <li className="emoji-item">
      <button
        type="button"
        onClick={() => {
          emojiOnClick(id)
        }}
      >
        <img src={emojiUrl} alt={emojiName} />
        <p>{id}</p>
      </button>
    </li>
  )
}

export default EmojiCard
