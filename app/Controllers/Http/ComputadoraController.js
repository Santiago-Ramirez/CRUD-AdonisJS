'use strict'

const Computadora = use('App/Models/Computadora');

const { validate } = use('Validator');

class ComputadoraController
{
    async getDatos({response})
      {
          const comp = await Computadora.all();
          try
          {
            return response.status(200).send({'Status':'Datos mostrados con exito', 'Datos': comp});
          }
          catch (e)
          {
            return response.status(400).send({'Status':'Error', 'Error': e });
          }
      }

    async insertarDatoFormaDos({request, response})
      {
        const rules =
        {
            modelo: 'required|string',
            marca: 'required|string'
        }

            const userinf = request.only(['marca', 'modelo'])
            const comp = new Computadora()
            comp.modelo = userinf.modelo
            comp.marca = userinf.marca
            await comp.save()

            const validation = await validate(request.all(), rules)

            if (validation.fails())
            {
              return validation.messages()
            }
            return comp
    }

    async insertarDato({request, response})
      {
          try
          {
              const comp = new Computadora()
              comp.marca = request.input('marca')
              comp.modelo = request.input('modelo')
              await comp.save()
              return response.status(200).send({'Status':'Dato Insertado Con Exito', 'Datos': comp});
          }
          catch (e)
          {
              return response.status(400).send({'Status':'Error', 'Error': e });
          }
      }

    async updatualizarDato({params, request, response})
      {
          try
          {
              const comp = await Computadora.find(params.id)
              comp.modelo = request.input('modelo')
              comp.marca = request.input('marca')
              await comp.save()
              return response.status(200).send({'Status':'Dato actualizado con exito', 'Datos': comp});
          }
          catch (e)
          {
              return response.status(400).send({'Status':'No se pudo actualizar el dato', 'TAS MAL CHAVO': e });
          }
    }

    async borrarDato({params, response})
      {
            try
            {
                const comp = await Computadora.find(params.id)
                await comp.delete()
                return response.status(200).send({'Status':'Dato borrado con exito', 'Datos': comp});
            }
            catch (e)
            {
                  return response.status(400).send({'Status':'No se pudo borrar el dato', 'TAS MAL CHAVO': e });
            }
      }
}

module.exports = ComputadoraController
