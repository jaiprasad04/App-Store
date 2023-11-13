// Write your code here
import './index.css'

const TabItem = props => {
  const {tabDetails, clickTabItem, isActive} = props
  const {tabId, displayText} = tabDetails

  const onClickTabItem = () => {
    clickTabItem(tabId)
  }

  const activeTabId = isActive ? 'active-tab-btn' : ''

  return (
    <li className="tab-item">
      <button
        type="button"
        onClick={onClickTabItem}
        className={`tab-button ${activeTabId}`}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
