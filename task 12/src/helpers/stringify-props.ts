<<<<<<< HEAD
export type StringifyObjectProps<Type extends Object> = {
=======
type StringifyObjectProps<Type extends Object> = {
>>>>>>> 39770f9105ecff6a19b29694c1c91a943be36349
  [Key in keyof Type]: string
};

const stringifyProps = <Type extends Object>(object: Type): StringifyObjectProps<Type> => {
  const objectLikeArray = Object.entries(object);

  const objectWithPropsStringified = objectLikeArray
    .reduce<Partial<StringifyObjectProps<Type>>>((prevObj, [key, value]) => ({
    ...prevObj,
    [key]: String(value),
  }), {});

  return objectWithPropsStringified as StringifyObjectProps<Type>;
};

export default stringifyProps;
