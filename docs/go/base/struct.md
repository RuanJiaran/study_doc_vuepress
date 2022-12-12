# 结构体（struct）

结构体定义需要使用 type 和 struct 语句。struct 语句定义一个新的数据类型，结构体中有一个或多个成员。type 语句设定了结构体的名称。

## 定义结构体

```go
type Books struct {
   title string
   auth string
}
```

##### 示例

```go
type Book struct {
	title string
	auth  string
}

func main() {
    // 示例1
	b1 := Book{title: "go", auth: "菜鸟"} // {title:go auth:菜鸟}
	fmt.Printf("%+v", b1)

    // 示例2
	b2 := Book{"php", "菜鸟"}
	fmt.Printf("%+v", b2)  				// {title:php auth:菜鸟}

    // 示例3
	var b3 Book
	b3.title = "js"
	fmt.Printf("%+v", b3)  				// {title:js auth:}
}
```

忽略的字段为 0 或 空