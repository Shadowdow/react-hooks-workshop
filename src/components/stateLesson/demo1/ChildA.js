function ChildA(props) {
  const {count} = props;
  console.log('ChildA call');

  return (
    <div className="mb-16">ChildA 父组件传下来的
      <span className='ml-8 text-brand'>{count}</span>
    </div>
  );
}

export default ChildA;
