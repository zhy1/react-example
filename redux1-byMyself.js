/**
 * Created by zy on 16/12/26.
 */


// 很多人通过react 了解 redux
// 而redux 只是 Map - Reduce 模型中的 Reduce 纯函数
// redux 可以独立存在




/**
 这是一个基础案例用来了解redux
 先讲一个小故事,教室里本来没有学生,当上课铃声响了,教室里就会有学生.
 用redux 描述真是太好不过.
 我们先使用语言描述
 初始状态: 教室没学生
 事件是  : 铃声响发生时,学生进了教室
 事件类型: 铃声响

 */





/**

 ****  现在我要用程序模仿这个小故事

 // redux 运行4个基本要素
 //      分为         定义                                 运行时
 // [               define                    ]      [   runtime      ]
 // 1 事件    2 事件处理器 3 通过事件处理器创建存储       4 触发事件处理器
 // 1 action 2  reduce   3 createStore(reduce)       4 dispatch(action)

 // 教室初始状态 initialState 没有学生 表示开始时的状态
 // 定义铃声时发生的事 action 是 BellRingsAction 表示一个事件
 // 发生的事件类型 actionTypes 是 bell-rings铃声响 表示一个事件类型 ,简单理解 action和reduce中的switch是一一对应的
 // 事件处理器 StudentAction 是一个 reduce 处理 action
 // 存储器 store 通过action 创建, 通过dispatch一个action 触发

 // 现在是redux逻辑:
 // 处理器 reduce  接受事件 action并执行相应的结果
 // createStore 通过 StudentAction 处理器 创建一个 存储器store
 // 存储器store 调用 dispatch 触发一个事件 action 让 reduce 接受

 */

/**
 ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 ///////////////////////////////////////////////////        故事事件的定义    /////////////////////////////////////////////////////
 ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 **/
// 导入 redux
var redux = require('redux');
var createStore = redux.createStore;

// 常量 用于给reduce和action引用,避免笔误而已
const ActionTypes = {
    Bell_Rings: 'Bell_Rings'
}

// 初始化状态 redux自己会执行一次dispatch(initial State)
var initialState = {
    student: [],
    aside: '初始的教室空空的'
}

// 定义一个action动作
var BellRingsAction = {
    type: ActionTypes.Bell_Rings,
    student: ['lily', 'jack'],
    aside: '铃声响了,同学们进教室了.'
}


// 这是一个reduce, 初始接受现在的state, 可能还不知道action的存在
// 想象一下第一次dispatch(getUsers(initialState))被执行时的函数运行过程和结果
function StudentAction(state, action) {
    state = state || initialState
    switch (action.type) {
        case ActionTypes.Bell_Rings:
            // 合并原来的state和action内容
            return Object.assign({}, state, {
                student: action.student,
                aside: action.aside
            })
        default :
            return state;
    }

}

// 将 reduce 放进 store
var store = createStore(StudentAction);

/**
 ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 /////////////////////////////////////////   定义完成 故事真正开始了   /////////////////////////////////////////////////////////////
 ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 **/


// 输出初始state
console.log(store.getState());


// 将一个 action 传入 dispatch,dispatch会调用 reduce导致 state 更新,
//使用 被直接定义的action
store.dispatch(BellRingsAction);


// 修改以后输出state
console.log(store.getState());


/**
 ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 /////////////////////////////////////////////////// 故事结束     ////////////////////////////////////////////////////////////////
 ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 **/