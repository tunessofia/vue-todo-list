export default {
  render() {
    return (
      <div class="min-h-screen min-w-full bg-gray-100 lg:p-10">
        <div class="h-screen w-full" id="app">
          <router-view></router-view>
        </div>
      </div>
    )
  }
}
