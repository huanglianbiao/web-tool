#内置函数
@builtin "whitespace.ne" #_ 表示任意数量的空格(选填)，__ 表示选填任意数量的空格(必填)
@builtin "string.ne" #btstring 表示单引号, sqstring表示反引号
@builtin "number.ne"

main -> (statement "\n"):+
statement -> "foo" | "bar"
