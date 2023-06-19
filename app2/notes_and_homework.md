2023-06-18:

- homework do something with timer
- homework do something with useEffect

- styles can be normal css styles but can also be jsx style objects.

## Function components

- hooks:
    - const [varname, setVarname] = useState();
    - useEffect( () => {...}, dependancyList );
    - useContext ?
    - routers ?
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
