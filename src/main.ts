import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { MyInterceptor } from './interceptors/MyInterceptor'
import { ValidationPipe } from '@nestjs/common'
import { MyExceptionFilter } from './interceptors/myException.filter'

const start = async () => {
  try {
    const PORT = process.env.PORT || 5000
    const app = await NestFactory.create(AppModule, {
      cors: {
        origin: true,
        methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE', 'OPTIONS'],
        credentials: true,
        maxAge: 3600
      }
    })
    app.useGlobalPipes(new ValidationPipe())
    app.useGlobalFilters(new MyExceptionFilter())
    const config = new DocumentBuilder()
      .setTitle('BOOKS')
      .setDescription('Документация REST API')
      .setVersion('1.0.0')
      .build()

    const document = SwaggerModule.createDocument(app, config)

    SwaggerModule.setup('/api/docs', app, document)

    await app.listen(PORT, () =>
      console.log(`Server has been started on PORT ${PORT}`)
    )
  } catch (e) {
    console.log(e)
  }
}

start()
