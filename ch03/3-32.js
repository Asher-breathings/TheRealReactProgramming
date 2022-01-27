function useWindowWidth() {
  const [width, setWidth] = React.useState(window.innerWidth);
  React.useEffect(()=>{
    const onResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('resize', onResize);
    }
  }, []);
  return width;
}
function WidthPrinter() {
  const width = useWindowWidth();
  return <div>{`width is ${width}`}</div>
}
const domContainer1 = document.querySelector("#root");
ReactDOM.render(<WidthPrinter />, domContainer1);