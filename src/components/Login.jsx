import { Button, Checkbox, Image, Input, Link, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from "@nextui-org/react"
import { Formik } from 'formik';
import { MailIcon } from "./MailIcon"
import { LockIcon } from "./LockIcon"
import logo from '../assets/images/logo.png'

export const Login = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalContent>
        {(onClose) => (
          <>
            <Formik
              initialValues={{ email: '', password: '' }}
              validate={values => {
                const errors = {};
                if (!values.email) {
                  errors.email = 'Required';
                } else if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                  errors.email = 'Correo electrónico inválido';
                }
                return errors;
              }}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  alert(JSON.stringify(values, null, 2));
                  setSubmitting(false);
                }, 400);
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false)
              }}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
              }) => (
                <form onSubmit={handleSubmit}>
                  <ModalHeader className="flex flex-col gap-1 text-md">Iniciar sesión</ModalHeader>
                  <ModalBody>
                    <div className="flex justify-center mb-5">
                      <Image
                        className=""
                        width={80}
                        alt="Logo"
                        src={logo}
                      />
                    </div>
                    <Input
                      autoFocus
                      endContent={
                        <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                      }
                      label="Correo electrónico"
                      placeholder="Ingresa tu correo electrónico"
                      variant="bordered"
                      name="email"
                    />
                    {errors.email && touched.email && errors.email}
                    <Input
                      endContent={
                        <LockIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                      }
                      label="Contraseña"
                      placeholder="Ingresa tu contraseña"
                      type="password"
                      variant="bordered"
                      name="password"
                    />
                    {errors.password && touched.password && errors.password}
                    <div className="flex py-2 px-1 justify-between">
                      <Checkbox
                        classNames={{
                          label: "text-small",
                        }}
                      >
                        Recuérdame
                      </Checkbox>
                      <Link color="primary" href="#" size="sm">
                        Olvidaste tu contraseña?
                      </Link>
                    </div>
                  </ModalBody>
                  <ModalFooter>
                    <Button color="danger" variant="flat" onPress={onClose}>
                      Cerrar
                    </Button>
                    <Button color="primary" type="submit" disabled={isSubmitting}>
                      Ingresar
                    </Button>
                  </ModalFooter>
                </form>
              )}
            </Formik>
          </>
        )}
      </ModalContent>
    </Modal>
  )
}
