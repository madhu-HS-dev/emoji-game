// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {emojisDetails, clickEmoji} = props
  const {id, emojiName, emojiUrl} = emojisDetails

  const onclickEmoji = () => {
    clickEmoji(id)
  }
  return (
    <li className="emoji-item">
      <button type="button" className="button" onClick={onclickEmoji}>
        <img src={emojiUrl} alt={emojiName} className="emoji" />
      </button>
    </li>
  )
}

export default EmojiCard
