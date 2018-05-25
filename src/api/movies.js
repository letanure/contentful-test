export default function product () {
  return {
    getList: slug => this.request(`entries`),
  }
}
