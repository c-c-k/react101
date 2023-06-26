2023-06-18:

- homework do something with timer
- homework do something with useEffect
- assignment: 
    - super component contains 3 sub components, when the subcomponents are hovered over a bigger version is shown.

- styles can be normal css styles but can also be jsx style objects.

## async
    - use like:
        ```javascriptreact
        async function demoAsyncFunc () {
            try {
                const response = await <function with a long execution time>
                ...
            } catch (err) {
                <handle error>
            }
        }
        ```

## API
    - api calls using javascript fetch
        ```javascriptreact
        useEffect(() => {
            fetch(<api url>)
            .then((response) => response.json())
            .then((json_data) => <json data handler>)
            .catch((err) => <error handler>)
        }, []
        )
        ```
    - api calls using axios 
        ```javascriptreact
        import axios from "axios";
        // axios has very good documentation
        ...
        useEffect(() => {
            axios.get(<api url>)
            .then(result => <json data handler (no need for a middle step of extracting the json)>)
            .catch((err) => <error handler>)
        }, []
        )
        
        ```

## Routes
    - useNavigate:
     ```javascriptreact
     import { useNavigate } from "react-router-dom";
     ...
     const navigate = useNavigate();
     ...
     navigate('/path/to/component/url');
     ...
     ```

## Function components

- hooks:
    - const [varname, setVarname] = useState();
    - useEffect( () => {...}, dependancyList );
        - example:
            ```javascript
            const [time, setTime] = useState(0);
            function tick() {
                setTime((prevTime) => prevTime++;)
            useEffect( () => {
                const interval = setInterval(tick, 1000);
                return () => clearInterval(interval);
            }, []);
            // the empty list for dependancyList makes the useEffect only once.
            // the return is only executed on useEffect destruction (which would happen at the latest on component unmount).
            ```
    - useContext ?
    - useRef:
        
        ```javascriptreact
            import { useRef } from "react";
            ...
            const refVar = useRef()
            const refVar2 = useRef(<initial value>)
            ...
            const demoHandler = () => {
                ...
                refVar.current.<property or method to modify, this referes to the DemoComponent defined below>
                ...
            }
            ...
            <DemoComponent ref={refVar}... />
            <button onClick={() => demoHandler}...>...</button>
            ...
        ```


## Class life cycle

| mounting              | updating                 | unmounting           | error handling |
|-----------------------|--------------------------|----------------------|----------------|
| Constructor           | getDerivedStateFromProps | ComponentWillUnmount |
| state                 | shouldComponentUpdate    |                      |
| (no DOM change)       | render                   |                      |
| (no external calls)   | getSnapshotBeforeUpdate  |                      |
| getDerivedStateFor... | componentDidUpdate       |                      |
| render                |                          |                      |
| ComponentDidMount     |                          |                      |
|                       |                          |                      |
|                       |                          |                      |

- setInterval for timed actions.
