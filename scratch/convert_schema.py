import re
import sys

with open("prisma/schema.prisma", "r") as f:
    content = f.read()

# Replace @db.Text with nothing (SQLite treats String as Text anyway)
content = re.sub(r'@db\.Text', '', content)

# Replace String[] with String (for SQLite JSON or comma separated strings)
content = re.sub(r'String\[\]', 'String', content)

# Replace Json with String (SQLite doesn't have native Json type in Prisma, wait, it does support it in newer versions but String is safer if it fails)
# Actually, let's leave Json as it is first, see if Prisma 7 supports it for SQLite (it usually doesn't, we'd need to use String).
# Prisma SQLite doesn't support Json arrays, let's replace Json? with String?
content = re.sub(r'Json\?', 'String?', content)
content = re.sub(r'Json', 'String', content)

with open("prisma/schema.prisma", "w") as f:
    f.write(content)
