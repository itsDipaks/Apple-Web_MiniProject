import React from "react";
import {useState, useEffect} from "react";
import {getdata} from "../../../Apis/api";
import styles from "./products.module.css";
import {useSearchParams} from "react-router-dom";

const Allcategory = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialpage = Number(searchParams.get("page")) || 1;
  const [data, setdata] = useState([]);
  const [page, setpage] = useState(initialpage);
  const [select, setselect] = useState("");
  const [loading, setloading] = useState(false);
  useEffect(() => {
    getdata({page, select}).then((res) => {
      setloading(true);
      setdata(res);

      setSearchParams({page});
    });
  }, [page, select]);

  const handeldselect = (e) => {
    setselect(e.target.value);
    // console.log(e.target.value)
  };

return (
    <>
      <div className={styles.selectag}>
        <select onChange={handeldselect} name="" id="">
          <option>Sort By Price</option>
          <option value="desc">High to Low</option>
          <option value="asc">Low to High</option>
        </select>
      </div>

      <div className={styles.maindiv}>
        {data?.map((el) => (
          <div className={styles.prodctsdiv}>
            <h2>{el.title}</h2>
            <img className={styles.imgs} src={el.img} alt="" />{" "}
            <h3>
              <span>Price : </span>
              {el.price}
            </h3>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
      <div className={styles.btndiv}>
        <button
          disabled={page === 1}
          className={styles.btn}
          onClick={() => setpage(page - 1)}
        >
          Prev
        </button>
        <button className={styles.btn}>{page}</button>
        <button className={styles.btn} onClick={() => setpage(page + 1)}>
          Next
        </button>
      </div>
    </>
  );
};

export default Allcategory;
