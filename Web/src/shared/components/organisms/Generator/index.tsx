import * as React from "react";

const Generator: React.FC = () => (
  <div className="row">
    <div className="col-8">
      <div className="card">
        <div className="card-body">
          <p className="card-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            molestie justo nec blandit imperdiet. Nunc ut arcu at justo ultrices
            cursus. Mauris nulla neque, feugiat sed suscipit in, fringilla non
            ante. Vestibulum non accumsan dolor. Ut tristique iaculis risus.
            Integer in nulla ac velit ornare hendrerit eu id justo. Etiam
            pulvinar tempor eros id pellentesque. Mauris vel dignissim augue.
            Nullam fermentum porta auctor. Quisque tortor leo, fringilla eget
            justo id, pulvinar posuere elit. Nullam at mattis metus, ac
            efficitur quam. Suspendisse eget pellentesque felis. Vivamus maximus
            mi a elit efficitur, vitae imperdiet neque luctus.
          </p>

          <p className="card-text">
            Nullam magna velit, accumsan sed erat eget, condimentum gravida
            odio. Vestibulum rhoncus, nisl et mollis eleifend, massa mi lacinia
            diam, non luctus tellus tortor sit amet sapien. Nulla eu tempor
            turpis. Praesent vehicula placerat convallis. Integer fringilla,
            nisi eu tincidunt euismod, lectus urna aliquam orci, quis sodales
            purus erat eget libero. Sed molestie, felis ac fringilla tincidunt,
            ante felis ullamcorper magna, quis egestas ante tellus sit amet
            diam. Morbi eu lacus dui. Phasellus at massa ac tortor dapibus
            pretium. Fusce pulvinar mi quis vulputate vehicula. Sed tristique
            dictum ligula eu lacinia.
          </p>

          <p className="card-text">
            Proin vel nisi vehicula, placerat magna lacinia, consectetur est. In
            cursus magna ut mi maximus, vitae porttitor tortor fermentum. In hac
            habitasse platea dictumst. Sed fermentum ullamcorper nisi et tempor.
            Vestibulum eu tortor gravida, viverra ante in, porttitor est.
            Curabitur fringilla faucibus justo in rhoncus. Aenean sit amet ipsum
            rhoncus, tempor odio luctus, lacinia erat. Pellentesque blandit
            volutpat faucibus.
          </p>
        </div>
      </div>
    </div>
    <div className="col-4">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Generátor</h5>
          <p className="card-text">
            <button type="button" className="btn btn-primary btn-lg btn-block">
              Generovat!
            </button>
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default Generator;
