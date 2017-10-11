var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!'
    }
})

var app2 = new Vue({
    el: '#app2',
    data: {
        message: '页面加载于' + new Date().toLocaleString()
    }
})

var app3 = new Vue({
    el: '#app3',
    data: {
        seen: true
    }
})

var app4 = new Vue({
    el: '.app4',
    data: {
        todos: [{
                text: '昨天'
            },
            {
                text: '今天'
            },
            {
                text: '明天'
            }
        ]
    }
})

var app5 = new Vue({
    el: '#app5',
    data: {
        message: 'Hello World!',
        url: 'http://www.baidu.com',
        firstName: "巩",
        lastName: "志彬",

    },
    computed: {
        fullName: {
            get: function () {
                return this.firstName + ' ' + this.lastName;
            },
            set: function (val) {
                var name = val.split(' ');
                this.firstName = name[0];
                this.lastName = name[1];
            }
        },
        reversedMessage: function () {
            return this.message.split('').reverse().join('');
        }
    },
    methods: {
        reverseMessage: function () {
            this.message = this.message.split('').reverse().join('');
        }
    }
})

var app6 = new Vue({
    el: '#app6',
    data: {
        message: 'Hello World!'
    }
})
Vue.component('todo-item', {
    template: '<li>这是一个待办事件</li>'
})
var app7 = new Vue({
    el: '#app7',
})
Vue.component('todo-item-2', {
    // todo-item 组件现在接受一个
    // "prop"，类似于一个自定义属性
    // 这个属性名为 todo。
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
})
var app_7 = new Vue({
    el: '#app-7',
    data: {
        groceryList: [{
                id: 0,
                text: '吃饭'
            },
            {
                id: 1,
                text: '睡觉'
            },
            {
                id: 2,
                text: '打豆豆'
            }
        ]
    }
})
var app_v_once = new Vue({
    el: '#app-v-once',
    data: {
        msg: '老巩最帅!'
    }
})
var app_v_html = new Vue({
    el: '#app-v-html',
    data: {
        rawHtml: '<div>这是一个div盒子</div>'
    }
})

var watch_test = new Vue({
    el: '#watch-test',
    data: {
        question: "",
        answer: "I cannot give you an answer until you ask a question!"
    },
    watch: {
        // 如果 question 发生改变，这个函数就会运行
        question: function (newQuestion) {
            this.answer = 'Waiting for you to stop typing...';
            this.getAnswer();
        }
    },
    methods: {
        // _.debounce 是一个通过 lodash 限制操作频率的函数。
        // 在这个例子中，我们希望限制访问 yesno.wtf/api 的频率
        // ajax 请求直到用户输入完毕才会发出
        // 学习更多关于 _.debounce function (and its cousin
        // _.throttle)，参考：https://lodash.com/docs#debounce
        getAnswer: _.debounce(function () {
            if (this.question.indexOf('?') == -1) {
                this.answer = 'Questions usually contain a question mark. ;-)';
                return;
            }
            this.answer = 'Thinking ....';
            var vm = this;
            axios.get('https://yesno.wtf/api')
                .then(function (response) {
                    vm.answer = _.capitalize(response.data.answer)
                })
                .catch(function (error) {
                    vm.answer = 'Error! Could not reach the API. ' + error
                })
        }, 500)

    }
})
var bind_test = new Vue({
    el: '#bind-test',
    data: {
        isActive: true,
        classObject: {
            isActive: true,
            'text-danger': true,
        }
    },
})

var if_test = new Vue({
    el: '#if-test',
    data: {
        case1: false,
        case2: true,
        OK: true,
        loginType: 'username',
    },
    methods: {
        toggleLoginType: function () {
            return this.loginType = this.loginType === 'username' ? 'email' : 'username';
        }
    }
})

var for_test = new Vue({
    el: '#for-test',
    data: {
        parentMessage: 'Parent',
        items: [{
                message: 'foo'
            },
            {
                message: 'bar'
            },
        ],
        object: {
            name: 'zxlg',
            age: 24,
            school: 'WHUT'
        },
        otherItem: [
            'hello',
            'world'
        ],

    },
})