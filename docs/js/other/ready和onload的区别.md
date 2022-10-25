# ready 和 onload 的区别

1. $(document).ready() 在 DOM 结构绘制完毕后就执行，不必等到加载完毕。
2. window.onload 必须等到页面内包括图片的所有元素加载完毕后才能执行。
3. $(document).ready() 比 windos.onload 先执行
4. $(document).ready() 可以执行多个，window.onload 只执行最后一个
5. $(document).ready(function(){}) 可以简写成 $(function(){})