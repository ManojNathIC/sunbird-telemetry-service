const express = require('express'),
  router = express.Router(),
  telemetryService = require('../service/telemetry-service');

router.post('/v1/telemetry', (req, res) => telemetryService.dispatch(req, res));

router.post('/v2/telemetry', (req, res) => telemetryService.dispatchV2(req, res));

router.get('/health', (req, res) => telemetryService.health(req, res));

module.exports = router;
