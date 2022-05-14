/* eslint-disable no-unused-vars */
import "./PostBeer.scss";
import { set, useForm } from "react-hook-form";
import Nav from "../../shared/components/Nav/Nav";
import { useState } from "react";
import Card from "../../shared/components/Card/Card";

const PostBeer = () => {
  const [submited, setSubmited] = useState(false);
  const [beer, setBeer] = useState({});
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setBeer(data);
    setSubmited(true);
  };

  const handleReset = () => {
    setSubmited(false);
    setBeer({});
  };

  return (
    <>
      <Nav />
      <section className="c-postBeer">
        {!submited ? (
          <>
            <h1 className="c-postBeer__title"> CREATE YOUR OWN BEER</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="c-form">
              <input placeholder="Name*" {...register("name", { required: true })} className="c-form__input" />
              {errors.name && <span className="c-form__error">This field is required</span>}
              <input placeholder="Image URL*" {...register("image_url", { required: true })} className="c-form__input" />
              {errors.image_url && <span className="c-form__error">This field is required</span>}
              <textarea rows="3" placeholder="Description*" {...register("description", { required: true })} className="c-form__textArea" />
              {errors.description && <span className="c-form__error">This field is required</span>}
              <fieldset className="c-form__fieldset">
                <input placeholder="Alcohol %*" {...register("abv", { required: true })} className="c-form__input" />
                {errors.abv && <span className="c-form__error">This field is required</span>}
                <input placeholder="Bitterness*" {...register("ibu", { required: true })} className="c-form__input" />
                {errors.ibu && <span className="c-form__error">This field is required</span>}
                <input placeholder="EBC*" {...register("ebc", { required: true })} className="c-form__input" />
                {errors.ebc && <span className="c-form__error">This field is required</span>}
              </fieldset>
              <fieldset className="c-form__fieldset">
                <input placeholder="SRM*" {...register("srm", { required: true })} className="c-form__input" />
                {errors.srm && <span className="c-form__error">This field is required</span>}
                <input placeholder="PH*" {...register("ph", { required: true })} className="c-form__input" />
                {errors.ph && <span className="c-form__error">This field is required</span>}
                <input placeholder="Id*" {...register("id", { required: true })} className="c-form__input" />
                {errors.id && <span className="c-form__error">This field is required</span>}
              </fieldset>
              <button type="submit" className="c-form__btn">
                Send
              </button>
            </form>
          </>
        ) : beer ? (
          <>
            <Card beer={beer} />
            <button onClick={handleReset} className="c-form__btn c-form__btn--create">
              Create another Beer
            </button>
          </>
        ) : null}
      </section>
    </>
  );
};

export default PostBeer;
