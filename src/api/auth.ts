import { Express } from 'express'
import { Logger } from 'winston'

import { Config } from '../config'
import { Success } from '../models'

export function setupAuthApi(app: Express, config: Config, _logger: Logger): Express {
    app.post<{}, Success, {}, {}>('/api/auth', async (_req, res) => {
        res.json({
            success: true,
        })
    })

    return app
}
