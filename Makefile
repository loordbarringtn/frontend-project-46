install:
	npm ci
gendiff:
	@if ! command -v gendiff &> /dev/null; then \
		echo "gendiff not found. Linking..."; \
		npm link; \
	else \
		echo "gendiff already linked."; \
	fi
	node gendiff.js
publish:
	npm publish --dry-run