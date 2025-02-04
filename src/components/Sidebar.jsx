import { useState, useCallback } from "react"
/**
 * Renders an array of strings as a filterable and expandable unordered list.
 * @returns Component
 */

export default function Sidebar({ initialMenuItems }) {
  // TODO: 2 - Maintain Menu State:
  // Use the state hook to maintain the current set of menu items.
  // Initialize this state based on the "initialMenuItems" prop.
  let [menuItems, setOfMenuItems] = useState(initialMenuItems)
  // State for the new menu item input field.
  let [newMenuItem, setNewMenuItem] = useState("")
  // State for the filter text.
  let [filter, theFilter] = useState("")

  // TODO: 3 - Implement AddMenuItem Callback:
  // This function adds the text from the input field as a new menu item.
  let addMenuItem = useCallback(() => {
    // It better not be blank buddy.
    if (newMenuItem.trim() === "") return

    //console.log("Added menu item") Did it work?

    // Add new menu item to the beginning of the array.
    setOfMenuItems(prevItems => [newMenuItem, ...prevItems])
    // Clear the input after.
    setNewMenuItem("")
  }, [newMenuItem])

  // TODO: 4 - Filter Menu Items:
  // Filter the menu items based on the filter text using a case-insensitive regular expression.
  // If the filter input is empty, all items are displayed.
  let filteredMenuItems = menuItems.filter(item => {
    if (!filter.trim()) return true
    // Create a case-insensitive regular expression from the filter text.
    let regex = new RegExp(filter, "i")
    return regex.test(item) //Bing bang and boom
  })

  return (
    <div>
      {/*
        TODO: 1 - Render Menu Items:
        Render an unordered list of the menu items (filtered based on the filter input).
        Each string in the menuItems array is rendered as its own list item.
      */}
      <ul>
        {filteredMenuItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      {/*//////// Add Item Input  /////////////*/}
      <input
        type="text"
        id="newMenuItemValue"
        value={newMenuItem}
        onChange={(event) => setNewMenuItem(event.target.value)}
        placeholder="Enter new menu item"
      />
      <br />
      {/*////// Add Item Button ///////////*/}
      <button onClick={addMenuItem}>
        Add Item
      </button>
      <br />
      {/*//////// Filter Input /////////////*/}
      <input
        id="filter"
        type="text"
        value={filter}
        onChange={(event) => theFilter(event.target.value)}
        placeholder="Filter by..."
      />
    </div>
  )
}
