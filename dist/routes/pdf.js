import { Router } from 'express';
const router = Router();
router.get('/proxy-pdf', async (req, res) => {
    const fileUrl = req.query.url;
    const fileName = req.query.name || 'download.pdf';
    if (!fileUrl) {
        return res.status(400).json({ error: 'Missing file URL' });
    }
    try {
        const response = await fetch(fileUrl);
        if (!response.ok) {
            return res.status(response.status).json({
                error: 'Failed to fetch PDF from CDN',
            });
        }
        const buffer = Buffer.from(await response.arrayBuffer());
        res.setHeader('Content-Type', 'application/pdf');
        res.setHeader('Content-Disposition', `attachment; filename="${fileName}"`);
        return res.send(buffer);
    }
    catch (err) {
        console.error('Proxy error:', err);
        return res.status(500).json({
            error: 'Internal server error',
        });
    }
});
export default router;
