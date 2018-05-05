import React from 'react';

function Contacts() {
    return (
        <section className="contacts">
          <div className="page-title">
              <h1>Our Contacts</h1>
          </div>

          <p>
            Please, contact our customer support team in case if you need an additional information
            and we will be happy to provide you with everything that you need.
            You may contact us any time it is conveniently for you - we work <b> 24/7</b>.
          </p>

          <iframe title="iframe" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2396.381494016536!2d8.832481315422275!3d53.085383201927534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b127de36b5241d%3A0xa5a06acc85e6cfcb!2zTWF4LVJlZ2VyLVN0cmHDn2UgMSwgMjgyMDkgQnJlbWVuLCDQndGW0LzQtdGH0YfQuNC90LA!5e0!3m2!1suk!2sua!4v1508925525301" allowfullscreen></iframe>

          <section className="contacts-field">
            <div>
                <div>Toll free number: </div>
                <div>Email:</div>
                <div>Physical address:</div>
            </div>

            <div>
                <div>1-800-476-30-50</div>
                <div>the_best_pharmacy@yahoo.com</div>
                <div>Max-Reger-Straße 1, 28209 Bremen, Germany</div>
            </div>
          </section>

        </section>
    )
}

export default Contacts