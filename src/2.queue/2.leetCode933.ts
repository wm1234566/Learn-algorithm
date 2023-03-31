// 写一个 RecentCounter 类来计算特定时间范围内最近的请求。

// 请你实现 RecentCounter 类：

// RecentCounter() 初始化计数器，请求数为 0 。
// int ping(int t) 在时间 t 添加一个新请求，其中 t 表示以毫秒为单位的某个时间，并返回过去 3000 毫秒内发生的所有请求数（包括新请求）。确切地说，返回在 [t-3000, t] 内发生的请求数。
// 保证 每次对 ping 的调用都使用比之前更大的 t 值。

// 

// 有新请求就入队，3000ms前发出的请求出队。
// 队列的长度就是最近请求次数。

function RecentCounter(value: number[][]): any[] {
    let queue: number[] = []
    let res: any[] = []

    for (let i = 0; i < value.length; i++) {

        if (value[i].length<=0) {
            res[i] = null
        }
        else {

            if (queue.length > 0) {
           
                
      
                queue.push(value[i][0]);//先添加
          
                // for(let j=0;j<queue.length;j++) //循环数组过程中，数组length会改变
                // {
                //     console.log("j",j,value[i][0],"=>",queue);
                    
                //     if(queue[queue.length-1] - queue[0] > 3000)
                //     {
                //             queue.shift()
                //             j=-1  // 删除之后都从0开始循环
                           
                //     }else
                //     {
                //         continue;
                //     }
                   
                // }
                
                while(value[i][0]-queue[0]>3000) //用while循环，queue[0]是不但在改变的，
                {
                    queue.shift()
                }

            
            }
            else {
                queue.push(value[i][0])

            }
            res[i] = queue.length


        }

    }
    return res
}

console.log("结果", RecentCounter([[], [1], [100], [3001], [3002],[6300],[9000]]));
