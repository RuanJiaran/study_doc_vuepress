# import 导包

## 常用方式

```go
import (
	"fmt"
)
```

## 下划线 import (匿名导入)

go 语言如果导入某个包，但没使用到导入的包，是会报错的。那么如何使程序不报错呢？可以使用匿名导入包的形式

在导入包名前加 `_` 就表示这个包是匿名导入的

```go
import (
	_ "fmt"
)
```

## 别名 import

```go
import (
	f "fmt"
)
```

## 点 import

点 import 就是在 import 的包前面加个`.` , 这个导入方式，在使用相应的包的函数或者变量的时候，可以省略包名。

```go
import (
	. "fmt"
)
```

