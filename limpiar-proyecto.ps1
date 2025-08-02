echo "⛔ Eliminando node_modules y package-lock.json..."
Remove-Item -Recurse -Force .\node_modules\
Remove-Item -Force .\package-lock.json

echo "🧹 Limpiando caché de npm..."
npm cache clean --force

echo "📦 Instalando dependencias..."
npm install

echo "✅ Listo. Intentá compilar con: npm run build"
