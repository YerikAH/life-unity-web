import { Banner, ButtonScrollTop, Footer, Navigation } from "../components";

export function Terms() {
  return (
    <>
      <Banner />
      <Navigation />
      <main className="max-w-5xl w-full mx-auto px-4 py-20">
        <h1 className="text-2xl text-gray-900 font-bold">
          Términos y Condiciones de LifeUnity
        </h1>
        <p className="text-base text-gray-500 font-normal mt-3">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque atque
          ex perspiciatis odit et aliquid. Hic voluptatibus nostrum velit minima
          dolore cum praesentium aliquam atque quasi aspernatur minus quae,
          corrupti at voluptas inventore aliquid incidunt pariatur delectus
          possimus accusantium illo. Rem quod voluptas corporis praesentium
          illum dolorem voluptatum quisquam ex
        </p>
        <div>
          <h2 className="text-lg text-gray-900 font-semibold mt-4 mb-2">
            1. Uso del Servicio
          </h2>
          <ul className="px-10">
            <li className="text-base text-gray-500 font-normal ">
              1.1. Al acceder o utilizar el Servicio, usted declara y garantiza
              que cuenta con al menos 18 años de edad y posee la capacidad legal
              para celebrar este Acuerdo.
            </li>
            <li className="text-base text-gray-500 font-normal ">
              1.2. Al acceder o utilizar el Servicio, usted acepta cumplir con
              estos Términos y con todas las leyes y regulaciones aplicables. En
              caso de no aceptar alguno de estos términos, se le prohíbe
              utilizar el Servicio.
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-lg text-gray-900 font-semibold mt-4 mb-2">
            2. Registro de Cuentas
          </h2>
          <ul className="px-10">
            <li className="text-base text-gray-500 font-normal ">
              2.1. Los usuarios tienen la opción de registrar cuentas en el
              Servicio de manera gratuita. Al registrarse, usted se compromete a
              proporcionar información precisa y actualizada. Asimismo, es su
              responsabilidad mantener la confidencialidad de su cuenta y
              contraseña, siendo usted responsable de todas las actividades que
              se lleven a cabo bajo su cuenta.
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-lg text-gray-900 font-semibold mt-4 mb-2">
            3. Creación de
          </h2>
          <ul className="px-10">
            <li className="text-base text-gray-500 font-normal ">
              3.1. El Servicio permite a los usuarios generar enlaces
              personalizados y códigos QR asociados de manera gratuita.
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-lg text-gray-900 font-semibold mt-4 mb-2">
            4. Publicidad
          </h2>
          <ul className="px-10">
            <li className="text-base text-gray-500 font-normal ">
              4.1. El Servicio puede mostrar anuncios en el panel de control. Al
              acceder al panel de control, usted acepta visualizar y quedar
              sujeto a la publicidad exhibida.
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-lg text-gray-900 font-semibold mt-4 mb-2">
            5. Privacidad
          </h2>
          <ul className="px-10">
            <li className="text-base text-gray-500 font-normal ">
              5.1. LifeUnity recopila y utiliza información personal conforme a
              su Política de Privacidad. Al utilizar el Servicio, usted acepta
              las prácticas de recopilación y uso de información descritas en
              dicha Política de Privacidad.
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-lg text-gray-900 font-semibold mt-4 mb-2">
            6. Servicios de Terceros
          </h2>
          <ul className="px-10">
            <li className="text-base text-gray-500 font-normal ">
              6.1. El Servicio hace uso de servicios proporcionados por Google,
              Firebase y Google Analytics para su funcionamiento. Al utilizar el
              Servicio, usted acepta cumplir con los términos y condiciones de
              estos servicios de terceros.
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-lg text-gray-900 font-semibold mt-4 mb-2">
            7. Modificaciones de los Términos y Condiciones
          </h2>
          <ul className="px-10">
            <li className="text-base text-gray-500 font-normal ">
              7.1. LifeUnity se reserva el derecho de modificar estos términos y
              condiciones en cualquier momento. Dichas modificaciones entrarán
              en vigor de forma inmediata tras su publicación en el Servicio.
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-lg text-gray-900 font-semibold mt-4 mb-2">
            8. Contacto
          </h2>
          <ul className="px-10">
            <li className="text-base text-gray-500 font-normal ">
              8.1. Si tiene alguna pregunta acerca de estos Términos, no dude en
              ponerse en contacto con nosotros a través de los medios
              proporcionados en el Servicio. Estos términos y condiciones entran
              en vigencia a partir de la fecha de su publicación.
            </li>
          </ul>
        </div>
      </main>
      <Footer />
      <ButtonScrollTop />
    </>
  );
}
