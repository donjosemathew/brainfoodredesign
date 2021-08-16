import "./gridGallery.scss";
const GridGallery = () => {
  return (
    <div class="gridgallery section">
      <div class="gridgallery__col col1"></div>
      <div class="gridgallery__col col2">
        <p class="gridgallery__text">
          Free shipping!
          <br />
          Utility box for easy storage
        </p>
      </div>
      <div class="gridgallery__col col3"></div>
      <div class="gridgallery__col col4">
        <p class="gridgallery__text">
          Ideal forlearners from <br />8 months - 8 years old
        </p>
      </div>
      <div class="gridgallery__col col5"></div>
      <div class="gridgallery__col col6">
        <p class="gridgallery__text">
          Gift wrap and <br />
          customize your present with personalized notes
        </p>
      </div>
    </div>
  );
};

export default GridGallery;
