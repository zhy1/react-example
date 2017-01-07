redux



关于其说明大多臃肿并且晦涩不堪


简单点说就是把一个  {type:'open'}形式的对象传入func, func根据type做操作

一般把{type:'open'}称之为action,  func 称之为 reducer

reducer是通过switch判断到action的type

reducer应该是一个不受数据内容影响的func 相同的输入永远返回相同的输出

