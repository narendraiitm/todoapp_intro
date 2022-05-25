const vm = new Vue({
  el: '#app',
  data: {
    items: [],
    item: null,
    filteredItems: [],
    filterText: 'all',
  },
  methods: {
    addItem() {
      this.items.push({ itemText: this.item, itemStatus: 'incomplete' })
      this.item = null
    },
    deleteItem(itemIndex) {
      this.items.splice(itemIndex, 1)
    },
    changeStatus(itemIndex) {
      this.items[itemIndex].itemStatus = 'complete'
    },
  },
  watch: {
    items() {
      this.filteredItems = this.items
    },
    filterText(newValue) {
      if (newValue != 'all') {
        this.filteredItems = this.items.filter((item) => {
          return item.itemStatus == newValue
        })
      } else {
        this.filteredItems = this.items
      }
    },
  },
})
